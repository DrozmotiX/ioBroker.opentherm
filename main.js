// Load dependency's
const utils = require("@iobroker/adapter-core");
const net = require("net");
const supported_objects = require('./lib/object_definition.js');
const checkhex = require(__dirname + '/lib/otgwdec');
const translatehex = require(__dirname + '/lib/openthermdec');
let client, ipaddr, otport, values

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
	ipaddr = adapter.config.ipaddr;
	otport = adapter.config.port;
	
	doStateCreate("info.Connection" ,"Connected","string","indicator.connected","",false);
	adapter.setState("info.Connection", { val: false, ack: true });

//		adapter.subscribeStates("*");

	try {
		client = net.connect({ host: ipaddr, port: 7686},
			function() { //'connect' listener
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


	// Read every incoming message on bus
	client.on('data', function(data) {

//		data = data.toString().toUpperCase();
//		adapter.log.warn(data);
//		checkinput(data)
//		adapter.log.info(data)
//		adapter.log.warn(checkhex.checkinput(adapter,data))
		const verify = checkhex.checkinput(adapter,data)

		if (verify != undefined) {
			values = translatehex.translate_input(adapter, verify)
//			adapter.log.info(values)
		}

	

//		const test = JSON.parse(checkinput(data));
//		adapter.log.info(test)
//		adapter.log.info(JSON.stringify(test))
//		translate_input(checkinput(data))
	});


}



//Function to handle state creation
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