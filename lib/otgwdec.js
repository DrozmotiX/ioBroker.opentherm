/*
#########################################################################################
#########################################################################################
######### Logic to translate Opentherm information into Human readable language #########
################################# All credits to Yveaux #################################
################# https://github.com/yveaux/node-red-contrib-opentherm ##################
#########################################################################################
#########################################################################################
*/

// Verify in binary data is OK to handle
/**
 *
 */
function checkinput(adapter, msg) {
    const DevLogging = adapter.config.DevLogging;
    const devData = adapter.config.DevMode;
    let checker = true;
    const raw = msg
        .toString()
        .toUpperCase()
        .replace(/[\r\n\t]/gm, '');

    if (DevLogging) {
        adapter.log.info(`Messagee raw ${raw}`);
    }

    if (raw.length != 9 && devData) {
        if (DevLogging) {
            adapter.log.error(`Illegal message length ${raw}`);
        }
    }

    const M_THERMOSTAT = 0;
    const M_BOILER = 1;
    const M_REQ_BOILER = 2;
    const M_RSP_THERMOSTAT = 3;
    const msgMap = { T: M_THERMOSTAT, B: M_BOILER, R: M_REQ_BOILER, A: M_RSP_THERMOSTAT };

    // Get type and validate
    const type = raw.charAt(0);
    if (-1 == Object.keys(msgMap).indexOf(type) && devData) {
        if (DevLogging) {
            adapter.log.error(`Illegal message type ${raw}`);
        }
        checker = false;
    }
    // Extract message and validate it's hex
    const message = raw.slice(1);
    const hexregex = /[0-9A-F]+/g;

    if (!hexregex.test(message) && devData) {
        if (DevLogging) {
            adapter.log.error(`Illegal message content ${raw}`);
        }
        checker = false;
    }
    // Verify parity -- The parity bit should be set or cleared such the
    // total number of '1' bits in the entire 32 bits of the message is even.
    if (popcount(parseInt(message, 16)) % 2 != 0 && devData) {
        if (DevLogging) {
            adapter.log.error(`Illegal message parity ${raw}`);
        }
        checker = false;
    }

    // Extract values
    const msgtype = (parseInt(message.slice(0, 2), 16) & 0x70) >> 4;
    const dataid = parseInt(message.slice(2, 4), 16);
    const datavalue = parseInt(message.slice(4, 8), 16);

    if (DevLogging) {
        adapter.log.info(
            `Bulding JSON object with : ` +
                `{"msgType" : "${msgtype}", "dataid" : "${dataid}", "datavalue" : "${datavalue}", "payload" : "${
                    raw
                }"}`,
        );
    }
    const tostate = `{"msgType" : "${msgtype}", "dataid" : "${dataid}", "datavalue" : "${datavalue}", "payload" : "${
        raw
    }"}`;
    if (checker) {
        return tostate;
    }
}

// Verify in binary data is OK to handle
function popcount(x) {
    let mask = 1,
        count = 0;
    while (mask) {
        if (x & mask) {
            count++;
        }
        mask <<= 1;
    }
    return count;
}

exports.checkinput = checkinput;
