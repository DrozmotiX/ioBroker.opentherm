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
			client.end()

			// Write message in log related to server connection
			client.on('end', function() {
				
				// Need to add logic for retry / restart
				adapter.log.warn('OpenTherm : disconnected from OpenTherm Gateway');
			});
			callback();
		} catch (e) {

			adapter.log.warn(e)
			callback();
		}
	},
});

function main() {
	const ipaddr = adapter.config.ipaddr;
	const otport = adapter.config.port;
	
	doStateCreate("info.Connection" ,"Connected","string","indicator.connected","",false);
	adapter.setState("info.Connection", { val: false, ack: true });

//		adapter.subscribeStates("*");

	try {
		// @ts-ignore 
		client = net.connect({ host: ipaddr, port: otport},
			function() { //'connect' listener
				doChannelCreate()
				adapter.log.info('OpenTherm : Succesfully connected on : ' + ipaddr);
//				adapter.setState("info.Connection", { val: true, ack: true });

			});		
	} catch (error) {

	}

	// Connection error handling
	client.on('error', function(error) {
		adapter.log.error(JSON.stringify(error));
		adapter.setState("info.Connection", { val: (JSON.stringify(error)), ack: true });
	});


	// Read every incoming message on bus
	client.on('data', function(data) {

		// Run check on data input if received message has correct format
		const verify = checkhex.checkinput(adapter,data)

		// Only call translation function when received value is valid
		if (verify != undefined) {
			// Translate OpenTherm message to human readable objects and values
			values = translatehex.translate_input(adapter, verify)



			// Handle received data to object structure and values
			if (values != "") {

				adapter.log.info(JSON.stringify(values))
				// Handle array and split to unique data objects
				for (const i in values) {
					objtype = toObjtype(values[i].Value)

					// Read 
					if (values[i].msgType == "4"){

						doStateCreate("raw." + values[i].Device,values[i].Device,objtype,"value.state","",false)
						let channel = attributes[values[i].Device].channel
						const name = attributes[values[i].Device].name
						const description = attributes[values[i].Device].description
						const role = attributes[values[i].Device].role
						const unit = attributes[values[i].Device].unit
						const write = attributes[values[i].Device].write
						const cat = attributes[values[i].Device].class

//						adapter.log.info(name + " : " + values[i].Value + unit)
						
						if (channel != "") {channel = channel + "."}

						doStateCreate(channel + name,description,objtype,role,unit,write)
						adapter.setState(channel + name, { val: values[i].Value, ack: true });
//						adapter.log.info(attributes[name].name + ' : ' + attributes[name].description)

//						adapter.setState("raw." + values[i].Device, { val: values[i].Value, ack: true });

//						doStateCreate("raw." + values[i].Device,values[i].Device,objtype,"value.state","",false)

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
		objtype = 'boolean'
		} else if (typeof value === 'string') {
		const f = parseFloat(value);
		// @ts-ignor
		if (f == value) {
			objtype = "number"
		} else {
			objtype = "string"
		}
	}
	return objtype
}

// Create logic channels for states
function doChannelCreate(){

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

}
