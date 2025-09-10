'use strict';

/*
 * Created with @iobroker/create-adapter v1.21.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');

// Load your modules here, e.g.:
const state_attr = require(`${__dirname}/lib/state_attr.js`); // Attribute library
// Modules for Serial port needed for direct USB connection
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
// Modules requird for TCP-IP conection
const net = require('net');
// Opentherm specific librarys to translate hex-values
const checkhex = require(`${__dirname}/lib/otgwdec`);
const translatehex = require(`${__dirname}/lib/openthermdec`);

let client, values, objtype, serialPort;

// const fs = require('fs');

class Opentherm extends utils.Adapter {
    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options]
     */
    constructor(options) {
        super({
            ...options,
            name: 'opentherm',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('objectChange', this.onObjectChange.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        // this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Load configuration to global variabl
        const ipaddr = this.config.ipaddr;
        const otport = this.config.port;
        const useUSB = this.config.byUSB;
        const useTCP = this.config.byTCPIP;
        const USB_Device = this.config.USBDevice;

        // Create & reset connection stat at adapter start
        // await this.create_state('info.connection', 'Connected', true);
        this.setState('info.connection', { val: false, ack: true });

        if (useUSB) {
            // Handle USB connection
            try {
                serialPort = new SerialPort(USB_Device);
                this.log.info('OpenTherm : Succesfully connected on : ' + '/dev/ttyUSB0');
                this.setState('info.connection', { val: true, ack: true });
            } catch (error) {
                this.log.error(`${error}`);
            }

            // Connection error handling
            serialPort.on('error', error => {
                this.log.error(JSON.stringify(error));
                this.setState('info.connection', { val: JSON.stringify(error), ack: true });
            });

            const parser = serialPort.pipe(new Readline({ delimiter: '\r\n' }));
            parser.on('data', data => {
                this.log.info(data);
                this.datahandler(data);
            });

            // Event at successful connection by USB
            serialPort.on('open', error => {
                this.log.error(`Issues  opening USB data connection : ${error}`);

                // Get a list of all USB devices
                // SerialPort..( (err, results) => {
                //
                // 	if (err) {
                // 		throw err;
                // 	} else {
                // 		this.log.error(' USB devices found : ' + results);
                // 	}
                // });
            });
        }

        if (useTCP) {
            let completeData = '';
            // Handle TCP-IP connection
            try {
                // @ts-expect-error ignore typing for net.connect
                client = net.connect({ host: ipaddr, port: otport }, () => {
                    //'connect' listener
                    // doChannelCreate();
                    this.log.info(`OpenTherm : Succesfully connected on : ${ipaddr}`);
                    this.setState('info.connection', { val: true, ack: true });
                });
            } catch {
                this.log.error(`OpenTherm : Connection failed on : ${ipaddr}`);
            }

            // Connection error handling
            client.on('error', error => {
                try {
                    this.log.error(JSON.stringify(error));
                    // this.setState('info.connection', { val: (JSON.stringify(error)), ack: true });
                } catch (error) {
                    this.log.error(`${error}`);
                }
            });

            client.on('data', data => {
                try {
                    const read = data.toString();
                    completeData += read;
                    // Check if data is correct. Only one data line to datahandler
                    if (completeData.match(/\r\n/)) {
                        //this.log.info('Response: ' + completeData);
                        this.datahandler(completeData);
                        completeData = '';
                    }
                } catch (error) {
                    this.log.error(`${error}`);
                }
            });
        }
    }

    async datahandler(data) {
        const devData = this.config.DevMode;
        const DevLogging = this.config.DevLogging;
        // Write data message to log
        if (DevLogging) {
            this.log.info(`Data received : ${data}`);
        }

        this.create_state('.info.message', 'Received Data', data);

        // Run check on data input if received message has correct format
        const verify = checkhex.checkinput(this, data);

        // Only call translation function when received value is valid
        if (verify != undefined) {
            // Translate OpenTherm message to human readable objects and values
            values = translatehex.translate_input(this, verify);
            // Handle received data to object structure and values
            if (values != undefined) {
                if (DevLogging) {
                    this.log.info(`Translated values : ${JSON.stringify(values)}`);
                }

                // Handle array and split to unique data objects
                for (const i in values) {
                    objtype = await this.toObjtype(values[i].Value);

                    // if (DevLogging){this.log.info('Values of [i] : ' + i);}
                    if (DevLogging) {
                        this.log.info(`Raw values of [i] : ${JSON.stringify(values[i])}`);
                    }
                    // if (DevLogging){this.log.info('Device value of [i] : ' + JSON.stringify(values[i].Device));}
                    //if (devLogging){this.log.info('Raw attribute lookkup : ' + JSON.stringify(attributes))}
                    // if (DevLogging){this.log.info('attribute lookkup : ' + JSON.stringify(state_attr['master/status/ch']));}
                    // if (DevLogging){this.log.info('Combined data with attribute values : ' + JSON.stringify(state_attr[values[i].Device]));}

                    let channel = state_attr[values[i].Device].channel;
                    let value = values[i].Value;
                    // const name = state_attr[values[i].Device].name;
                    const name = values[i].Device;
                    // const description = state_attr[values[i].Device].description;
                    // const role = state_attr[values[i].Device].role;
                    // const unit = state_attr[values[i].Device].unit;
                    // const write = state_attr[values[i].Device].write;
                    const cat = values[i].msgType;

                    // Round values if they are numbers to ensure only 2 digits after comma

                    // To-Do : Analyse if rounding function is realy working !
                    if (objtype == 'number') {
                        value = Math.round(value * 10) / 10;
                    }

                    if (devData) {
                        this.create_state(`_Dev.${cat}.${name}`, name, value);
                        // doStateCreate('_Dev.' + cat + '.' + name,description,objtype,role,unit,write);
                        // this.setState('_Dev.' + cat + '.' + name, { val: value, ack: true });
                    }
                    //Write all channels to 'raw' tree for developer purposes
                    // if (DevLogging){this.log.info(name + ' with value : ' + value + unit);} // IF this loggin is needed move to state creation

                    // Read only Read-ACK related values and store in states (we need to find out which datatype for which state must be used!)
                    if (values[i].msgType == '4') {
                        if (channel != '') {
                            channel = `${channel}.`;
                        }

                        // doStateCreate(channel + name,description,objtype,role,unit,write);

                        this.create_state(channel + name, name, value);

                        // this.setState(channel + name, { val: value, ack: true });
                        // if (DevLogging){this.log.info('Data written to state : ' + name);}
                    }
                }
            }
        }
    }

    async create_state(state, name, value) {
        this.log.debug(`Create_state called for : ${state} with value : ${value}`);

        try {
            // Try to get details from state lib, if not use defaults. throw warning is states is not known in attribute list
            if (state_attr[name] === undefined) {
                this.log.warn(`State attribute definition missing for + ${name}`);
            }
            const writable = state_attr[name] !== undefined ? state_attr[name].write || false : false;
            const state_name = state_attr[name] !== undefined ? state_attr[name].name || name : name;
            const role = state_attr[name] !== undefined ? state_attr[name].role || 'state' : 'state';
            const type = state_attr[name] !== undefined ? state_attr[name].type || 'mixed' : 'mixed';
            const unit = state_attr[name] !== undefined ? state_attr[name].unit || '' : '';
            this.log.debug(`Write value : ${writable}`);

            await this.setObjectNotExistsAsync(state, {
                type: 'state',
                common: {
                    name: state_name,
                    read: role,
                    role: role,
                    type: type,
                    unit: unit,
                    write: writable,
                },
                native: {},
            });

            await this.setState(state, { val: value, ack: true });

            // Subscribe on state changes if writable
            if (writable === true) {
                this.subscribeStates(state);
            }
        } catch (error) {
            this.log.error(`Create state error = ${error}`);
        }
    }

    async toObjtype(value) {
        // Lets first ensure what kind of datatype we have
        if (value == 'true' || value == 'false') {
            objtype = 'boolean';
        } else if (Number.isNaN(parseFloat(value)) === false) {
            objtype = 'number';
        } else {
            objtype = 'string';
        }

        return objtype;
    }

    // Create logic channels for states
    async doChannelCreate() {
        const DevLogging = this.config.DevLogging;
        const devData = this.config.DevMode;
        // Create channels for RAW-Data if Dev-Mode is activated
        if (devData) {
            this.doChannelCreateDev();
        }

        this.createChannel('', 'config', {
            name: 'config',
        });

        this.createChannel('', 'control', {
            name: 'control',
        });

        this.createChannel('', 'fault', {
            name: 'faul',
        });

        this.createChannel('', 'info', {
            name: 'info',
        });

        this.createChannel('', 'status', {
            name: 'status',
        });

        if (DevLogging) {
            this.log.info('Channels create');
        }
    }

    async doChannelCreateDev() {
        this.setObjectNotExists('_Dev', {
            type: 'device',
            common: {
                name: 'Raw data seperated by MessageType',
            },
            native: {},
        });

        this.createChannel('_Dev', '0', {
            name: 'Read-Data || msgType : 0',
        });

        this.createChannel('_Dev', '1', {
            name: 'Write-Data || msgType : 1',
        });

        this.createChannel('_Dev', '2', {
            name: 'Read-Ack || msgType : 2',
        });

        this.createChannel('_Dev', '3', {
            name: 'Write-Ack || msgType : 3',
        });

        this.createChannel('_Dev', '4', {
            name: 'Data-Inv || msgType : 4',
        });

        this.createChannel('_Dev', '5', {
            name: 'Unk-DataId || msgType : 5',
        });

        this.createChannel('_Dev', '6', {
            name: '????????? || msgType : 6',
        });

        this.createChannel('_Dev', '7', {
            name: '????????? || msgType : 7',
        });

        this.createChannel('_Dev', '8', {
            name: '????????? || msgType : 8',
        });

        this.log.info('Channels created');
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     *
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
            this.log.info('cleaned everything up...');
            callback();
        } catch {
            callback();
        }
    }

    /**
     * Is called if a subscribed object changes
     *
     * @param {string} id
     * @param {ioBroker.Object | null | undefined} obj
     */
    onObjectChange(id, obj) {
        if (obj) {
            // The object was changed
            this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
        } else {
            // The object was deleted
            this.log.info(`object ${id} deleted`);
        }
    }

    /**
     * Is called if a subscribed state changes
     *
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
        } else {
            // The state was deleted
            this.log.info(`state ${id} deleted`);
        }
    }

    // /**
    //  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
    //  * Using this method requires 'common.message' property to be set to true in io-package.json
    //  * @param {ioBroker.Message} obj
    //  */
    // onMessage(obj) {
    // 	if (typeof obj === 'object' && obj.message) {
    // 		if (obj.command === 'send') {
    // 			// e.g. send email or pushover or whatever
    // 			this.log.info('send command');

    // 			// Send response in callback if required
    // 			if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
    // 		}
    // 	}
    // }
}

// @ts-expect-error parent is a valid property on module
if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options]
     */
    module.exports = options => new Opentherm(options);
} else {
    // otherwise start the instance directly
    new Opentherm();
}
