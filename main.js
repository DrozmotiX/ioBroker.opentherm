// Load dependency's
const utils = require("@iobroker/adapter-core");
const net = require("net");
const attributes = require('./lib/object_definition.js');
const checkhex = require(__dirname + '/lib/otgwdec');
const translatehex = require(__dirname + '/lib/openthermdec');
let client, values, objtype

// Create the adapter and define its methods
const adapter = utils.adapter({
	name: "opentherm",
	// The ready callback is called when databases are connected and adapter received configuration.
	ready: main, // Main method defined below for readability

	// is called when adapter shuts down - callback has to be called under any circumstances!
	unload: (callback) => {
		try {
			
			// Close TCP listener
			client.end();

			// Write message in log related to server connection
			client.on('end', function() {
				
				// Need to add logic for retry / restart
				adapter.log.warn('OpenTherm : disconnected from OpenTherm Gateway');
			});
			callback();
		} catch (error) {

			adapter.log.warn(error);
			callback();
		}
	},
});

// const devData = true;
// const devLogging = false;
function main() {
	const ipaddr = adapter.config.ipaddr;
	const otport = adapter.config.port;
	const devData = adapter.config.DevMode
	const DevLogging = adapter.config.DevLogging

	doStateCreate("info.Connection" ,"Connected","string","indicator.connected","",false);
	adapter.setState("info.Connection", { val: false, ack: true });

//		adapter.subscribeStates("*");

	try {
		// @ts-ignore 
		client = net.connect({ host: ipaddr, port: otport},
			function() { //'connect' listener
				doChannelCreate()
				adapter.log.info('OpenTherm : Succesfully connected on : ' + ipaddr);
				adapter.setState("info.Connection", { val: true, ack: true });
			});		
	} catch (error) {

	}

	// Connection error handling
	client.on('error', function(error) {
		adapter.log.error(JSON.stringify(error));
		adapter.setState("info.Connection", { val: (JSON.stringify(error)), ack: true });
	});


	// Read every incoming message on TCP-IP bus
	client.on('data', function(data) {

		// Write data message to log
		if (DevLogging){adapter.log.info("Data received : " + data);}
		
		// Run check on data input if received message has correct format
		const verify = checkhex.checkinput(adapter,data);

//		adapter.log.info(JSON.stringify(verify))
		// Only call translation function when received value is valid
		if (verify != undefined) {
			// Translate OpenTherm message to human readable objects and values
			values = translatehex.translate_input(adapter, verify);
			// Handle received data to object structure and values
			if (values != undefined) {

				if (DevLogging){adapter.log.info("Translated values : " + JSON.stringify(values));}

				// Handle array and split to unique data objects
				for (const i in values) {
					let msgType;
					objtype = toObjtype(values[i].Value);

					if (DevLogging){adapter.log.info("Values of [i] : " + i)}
					if (DevLogging){adapter.log.info("Raw values of [i] : " + JSON.stringify(values[i]))}
					if (DevLogging){adapter.log.info("Device value of [i] : " + JSON.stringify(values[i].Device))}
					//if (devLogging){adapter.log.info("Raw attribute lookkup : " + JSON.stringify(attributes))}
					if (DevLogging){adapter.log.info("attribute lookkup : " + JSON.stringify(attributes["master/status/ch"]))}
					if (DevLogging){adapter.log.info("Combined data with attribute values : " + JSON.stringify(attributes[values[i].Device]))}

					let channel = attributes[values[i].Device].channel
					const name = attributes[values[i].Device].name;
					const description = attributes[values[i].Device].description;
					const role = attributes[values[i].Device].role;
					const unit = attributes[values[i].Device].unit;
					const write = attributes[values[i].Device].write;
					const cat = values[i].msgType;

					if (devData){
						doStateCreate("_Dev." + cat + "." + name,description,objtype,role,unit,write);
						adapter.setState("_Dev." + cat + "." + name, { val: values[i].Value, ack: true });
					}
						//Write all channels to "raw" tree for developer purposes
					if (DevLogging){adapter.log.info(name + " with value : " + values[i].Value + unit);}

					// Read only Read-ACK related values and store in states (we need to find out which datatype for which state must be used!)
					if (values[i].msgType == "4"){
												
						if (channel != "") {channel = channel + ".";}

						doStateCreate(channel + name,description,objtype,role,unit,write);
						adapter.setState(channel + name, { val: values[i].Value, ack: true });
						if (DevLogging){adapter.log.info("Data written to state : " + name);}

					}
				}
			}
		}

	});
}

// Function to handle state creation
function doStateCreate(id,name,type,role,unit,write) {

	adapter.setObjectNotExists(id, {
		type: "state",
		common: {
			name: name,
			type: type,
			role: role,
			read: true,
			unit: unit,
			write: write,
		},
		native: {},
	});
}

function toObjtype (value) {
	// Lets first ensure what kind of datatype we have
	if (value == 'true' || value == 'false') {
		objtype = 'boolean';
		} else if (typeof value === 'string') {
		const f = parseFloat(value);
		// @ts-ignore this check should be handled differently in later release
		if (f === value) {
			objtype = "number";
		} else {
			objtype = "string";
		}
	}
	return objtype;
}

// Create logic channels for states
function doChannelCreate(){
	const DevLogging = adapter.config.DevLogging
	const devData = adapter.config.DevMode
	// Create channels for RAW-Data if Dev-Mode is activated
	if (devData){doChannelCreateDev();}
	
	adapter.createChannel("","config",{
		"name": "config"
	});

	adapter.createChannel("","control",{
		"name": "control"
	});

	adapter.createChannel("","fault",{
		"name": "faul"
	});

	adapter.createChannel("","info",{
		"name": "info"
	});

	adapter.createChannel("","status",{
		"name": "status"
	});

	if (DevLogging){adapter.log.info("Channels create")}

}

function doChannelCreateDev(){

	adapter.setObjectNotExists("_Dev", {
		type: "device",
		common: {
			name: "Raw data seperated by MessageType",
		},
		native: {},
	});

	adapter.createChannel("_Dev","0",{
		"name": "Read-Data || msgType : 0"
	});

	adapter.createChannel("_Dev","1",{
		"name": "Write-Data || msgType : 1"
	});

	adapter.createChannel("_Dev","2",{
		"name": "Read-Ack || msgType : 2"
	});

	adapter.createChannel("_Dev","3",{
		"name": "Write-Ack || msgType : 3"
	});

	adapter.createChannel("_Dev","4",{
		"name": "Data-Inv || msgType : 4"
	});

	adapter.createChannel("_Dev","5",{
		"name": "Unk-DataId || msgType : 5"
	});

	adapter.createChannel("_Dev","6",{
		"name": "????????? || msgType : 6"
	});

	adapter.createChannel("_Dev","7",{
		"name": "????????? || msgType : 7"
	});

	adapter.createChannel("_Dev","8",{
		"name": "????????? || msgType : 8"
	});

	adapter.log.info("Channels created")

}