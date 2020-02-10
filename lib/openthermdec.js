/*
#########################################################################################
#########################################################################################
######### Logic to translate Opentherm information into Human readable language #########
################################# All credits to Yveaux #################################
################# https://github.com/yveaux/node-red-contrib-opentherm ##################
#########################################################################################
#########################################################################################
*/

function translate_input(adapter,msg){
	const DevLogging = adapter.config.DevLogging;
	const outcome = [];
	msg = JSON.parse(msg);

	// Master-to-slave messages (conrol unit to boiler)
	// const MSG_TYPE_READ_DATA = 0;
	// const MSG_TYPE_WRITE_DATA = 1;
	// const MSG_TYPE_INVALID_DATA = 2;
	// Slave-to-master messages (boiler to conrol unit)
	// const MSG_TYPE_READ_ACK = 4;
	// const MSG_TYPE_WRITE_ACK = 5;
	// const MSG_TYPE_DATA_INVALID = 6;
	// const MSG_TYPE_UNKNOWN_DATAID = 7;

	function HB(v) { return (v >> 8) & 0xff; }
	function LB(v) { return v & 0xff; }
	function convBit(v) { return v > 0 ? true : false; }
	function convF88(v)
	{
		// signed fixed point value : 1 sign bit, 7 integer bit, 8 fractional bits (two’s compliment ie. the
		// LSB of the 16bit binary number represents 1/256th of a unit).
		const sign = v >= 0x8000;
		if (sign) v = 0x10000 - v;
		const int   = (v & 0xFF00) >> 8;
		const fract = (v & 0x00FF)/256.0;
		v = int + fract;
		if (sign) v = -v;
		return v;
	}
	function convU8(v)  { return v & 0xFF; }
	function convU16(v) { return v & 0xFFFF; }
	// Convert from 2's complement
	// http://math.stackexchange.com/questions/285459/how-can-i-convert-2s-complement-to-decimal
	function convS8(v)  { return v > 127 ? -((~ v) + 1) : v; }
	function convS16(v) { return v > 32767 ? -((~ v) + 1) : v; }

	const Map = {
	// See OpenTherm spec 2.2 and otmonitor.tcl from http://otgw.tclcode.com/otmonsrc.html
	// Class 1: Control and Status Information
		0:  [ function(v) { return [convBit(HB(v) & 1  ), 'master/status/ch'                           ];},
			function(v) { return [convBit(HB(v) & 2  ), 'master/status/dhw'                          ];},
			function(v) { return [convBit(HB(v) & 4  ), 'master/status/cooling'                      ];},
			function(v) { return [convBit(HB(v) & 8  ), 'master/status/otc'                          ];},
			function(v) { return [convBit(HB(v) & 16 ), 'master/status/ch2'                          ];},
			function(v) { return [convBit(HB(v) & 32 ), 'master/status/summer_mode'                  ];},
			function(v) { return [convBit(HB(v) & 64 ), 'master/status/dhw_blocking'                 ];},
			function(v) { return [convBit(LB(v) & 1  ), 'slave/status/fault'                         ];},
			function(v) { return [convBit(LB(v) & 2  ), 'slave/status/ch'                            ];},
			function(v) { return [convBit(LB(v) & 4  ), 'slave/status/dhw'                           ];},
			function(v) { return [convBit(LB(v) & 8  ), 'slave/status/flame'                         ];},
			function(v) { return [convBit(LB(v) & 16 ), 'slave/status/cooling'                       ];},
			function(v) { return [convBit(LB(v) & 32 ), 'slave/status/ch2'                           ];},
			function(v) { return [convBit(LB(v) & 64 ), 'slave/status/diagnostic'                    ];},
			function(v) { return [convBit(LB(v) & 128), 'slave/status/electricity_prod'              ];} ],
		1: [  function(v) { return [convF88(   v       ), 'control/setpoint'                                 ];} ],
		5: [  function(v) { return [convBit(HB(v) & 1  ), 'fault/service_request'                            ];},
			function(v) { return [convBit(HB(v) & 2  ), 'fault/lockout_reset'                              ];},
			function(v) { return [convBit(HB(v) & 4  ), 'fault/low_water_pressure'                         ];},
			function(v) { return [convBit(HB(v) & 8  ), 'fault/gas_flame'                                  ];},
			function(v) { return [convBit(HB(v) & 16 ), 'fault/air_pressure'                               ];},
			function(v) { return [convBit(HB(v) & 32 ), 'fault/water_overtemp'                             ];},
			function(v) { return [convU8 (LB(v)      ), 'fault/oem_code'                                   ];} ],
		8: [  function(v) { return [convF88(   v       ), 'control/setpoint2'                                ];} ],
		// 70	{flag8 flag8}	'Status V/H'
		// 71	{nu u8}		'Control setpoint V/H'
		// 72	{flag8 u8}	'Fault flags/code V/H'
		// 73	{u16}		'OEM diagnostic code V/H'
		// 101	{flag8 flag8}	'Solar storage mode and status'
		// 102	{flag8 u8}	'Solar storage fault flags'
		115: [  function(v) { return [convU16(   v       ), 'diagnostic/oem_code'                              ];} ],
		// Class 2: Configuration Information
		2: [  function(v) { return [convU8 (HB(v)      ), 'master/member_id'                                 ];} ],
		3: [  function(v) { return [convBit(HB(v) & 1  ), 'slave/config/dhw_present'                         ];},
			function(v) { return [convBit(HB(v) & 2  ), 'slave/config/control_type'                        ];},
			function(v) { return [convBit(HB(v) & 4  ), 'slave/config/cooling_config'                      ];},
			function(v) { return [convBit(HB(v) & 8  ), 'slave/config/dhw_config'                          ];},
			function(v) { return [convBit(HB(v) & 16 ), 'slave/config/master_low_off_and_pump_control'     ];},
			function(v) { return [convBit(HB(v) & 32 ), 'slave/config/ch2_present'                         ];},
			function(v) { return [convU8 (LB(v)      ), 'slave/member_id'                                  ];} ],
		// 74	{flag8 u8}	'Configuration/memberid V/H'
		// 75	{f8.8}		'OpenTherm version V/H'
		// 76	{u8 u8}		'Product version V/H'
		// 103	{flag8 u8}	'Solar storage config/memberid'
		// 104	{u8 u8}		'Solar storage product version'
		124: [  function(v) { return [convF88(   v       ), 'master/opentherm_version'                         ];} ],
		125: [  function(v) { return [convF88(   v       ), 'slave/opentherm_version'                          ];} ],
		126: [  function(v) { return [convU8 (HB(v)      ), 'master/product_type'                              ];},
			function(v) { return [convU8 (LB(v)      ), 'master/product_version'                           ];} ],
		127: [  function(v) { return [convU8 (HB(v)      ), 'slave/product_type'                               ];},
			function(v) { return [convU8 (LB(v)      ), 'slave/product_version'                            ];} ],
		// Class 3: Remote Commands
		4: [  function(v) { return [convU8 (HB(v)      ), 'command_code'                                     ];},
			function(v) { return [convU8 (LB(v)      ), 'command_response_code'                            ];} ],
		// Class 4: Sensor and Informational Data
		16: [  function(v) { return [convF88(   v       ), 'room/setpoint'                                    ];} ],
		17: [  function(v) { return [convF88(   v       ), 'modulation/level'                                 ];} ],
		18: [  function(v) { return [convF88(   v       ), 'ch/water_pressure'                                ];} ],
		19: [  function(v) { return [convF88(   v       ), 'dhw/flow_rate'                                    ];} ],
		20: [  function(v) { return [convU8 (HB(v) >> 5 ), 'date/day_of_week'                                 ];},
			function(v) { return [convU8 (HB(v) & 31 ), 'date/hours'                                       ];},
			function(v) { return [convU8 (LB(v)      ), 'date/minutes'                                     ];} ],
		21: [  function(v) { return [convU8 (HB(v)      ), 'date/month'                                       ];},
			function(v) { return [convU8 (LB(v)      ), 'date/day_of_month'                                ];} ],
		22: [  function(v) { return [convU16(   v       ), 'date/year'                                        ];} ],
		23: [  function(v) { return [convF88(   v       ), 'room/setpoint_ch2'                                ];} ],
		24: [  function(v) { return [convF88(   v       ), 'room/temp'                                        ];} ],
		25: [  function(v) { return [convF88(   v       ), 'boiler/temp'                                      ];}, ],
		26: [  function(v) { return [convF88(   v       ), 'dhw/temp'                                         ];} ],
		27: [  function(v) { return [convF88(   v       ), 'outside/temp'                                     ];} ],
		28: [  function(v) { return [convF88(   v       ), 'return/temp'                                      ];} ],
		29: [  function(v) { return [convF88(   v       ), 'solar/storage_temp'                               ];} ],
		30: [  function(v) { return [convS16(   v       ), 'solar/collector_temp'                             ];} ],
		31: [  function(v) { return [convF88(   v       ), 'ch2/flow_temp'                                    ];} ],
		32: [  function(v) { return [convF88(   v       ), 'dhw2/temp'                                        ];} ],
		33: [  function(v) { return [convS16(   v       ), 'exhaust/temp'                                     ];} ],
		// 34	{f8.8}		'Boiler heat exchanger temperature'
		// 35	{u8 u8}		'Boiler fan speed and setpoint'
		// 77	{nu u8}		'Relative ventilation'
		// 78	{u8 u8}		'Relative humidity exhaust air'
		// 79	{u16}		'CO2 level exhaust air'
		// 80	{f8.8}		'Supply inlet temperature'
		// 81	{f8.8}		'Supply outlet temperature'
		// 82	{f8.8}		'Exhaust inlet temperature'
		// 83	{f8.8}		'Exhaust outlet temperature'
		// 84	{u16}		'Exhaust fan speed'
		// 85	{u16}		'Inlet fan speed'
		// 113	{u16}		'Unsuccessful burner starts'
		// 114	{u16}		'Flame signal too low count'
		116: [  function(v) { return [convU16(   v       ), 'burner/starts'                                    ];} ],
		117: [  function(v) { return [convU16(   v       ), 'ch/pump_starts'                                   ];} ],
		118: [  function(v) { return [convU16(   v       ), 'dhw/pump_starts'                                  ];} ],
		119: [  function(v) { return [convU16(   v       ), 'dhw/burner_starts'                                ];} ],
		120: [  function(v) { return [convU16(   v       ), 'burner/hours'                                     ];} ],
		121: [  function(v) { return [convU16(   v       ), 'ch/pump_hours'                                    ];} ],
		122: [  function(v) { return [convU16(   v       ), 'dhw/pump_hours'                                   ];} ],
		123: [  function(v) { return [convU16(   v       ), 'dhw/burner_hours'                                 ];} ],
		// Class 5: Pre-defined Remote Boiler Parameters
		6: [  function(v) { return [convBit(HB(v) & 1  ), 'remote_parameter/transfer_enable/dhw_setpoint'    ];},
			function(v) { return [convBit(HB(v) & 2  ), 'remote_parameter/transfer_enable/ch_max_setpoint' ];},
			function(v) { return [convBit(LB(v) & 1  ), 'remote_parameter/rw_flags/dhw_setpoint'           ];},
			function(v) { return [convBit(LB(v) & 2  ), 'remote_parameter/rw_flags/ch_max_setpoint'        ];} ],
		48: [  function(v) { return [convS8 (HB(v)      ), 'dhw/setpoint_upper'                               ];},
			function(v) { return [convS8 (LB(v)      ), 'dhw/setpoint_lower'                               ];} ],
		49: [  function(v) { return [convS8 (HB(v)      ), 'ch/max_setpoint_upper'                            ];},
			function(v) { return [convS8 (LB(v)      ), 'ch/max_setpoint_lower'                            ];} ],
		// 50	{s8 s8}		'OTC heat curve ratio boundaries' --  OTC heat curve ratio upper & lower bounds for adjustment
		// 51	{s8 s8}		'Remote parameter 4 boundaries'
		// 52	{s8 s8}		'Remote parameter 5 boundaries'
		// 53	{s8 s8}		'Remote parameter 6 boundaries'
		// 54	{s8 s8}		'Remote parameter 7 boundaries'
		// 55	{s8 s8}		'Remote parameter 8 boundaries'
		56: [  function(v) { return [convF88(  (v)      ), 'dhw/setpoint'                                     ];} ],
		57: [  function(v) { return [convF88(  (v)      ), 'ch/max_water_setpoint'                            ];} ],
		// 58	{f8.8}		'OTC heat curve ratio'
		// 59	{f8.8}		'Remote parameter 4'
		// 60	{f8.8}		'Remote parameter 5'
		// 61	{f8.8}		'Remote parameter 6'
		// 62	{f8.8}		'Remote parameter 7'
		// 63	{f8.8}		'Remote parameter 8'
		// 86	{flag8 flag8}	'Remote parameter settings V/H'
		// 87	{u8 nu}		'Nominal ventilation value'
		// Class 6: Transparent Slave Parameters
		10: [  function(v) { return [convU8 (HB(v)      ), 'tsp/number_supported'                             ];} ],
		11: [  function(v) { return [convU8 (HB(v)      ), 'tsp/index'                                        ];},
			function(v) { return [convU8 (LB(v)      ), 'tsp/value'                                        ];} ],
		// 88	{u8 nu}		'Number of TSPs V/H'
		// 89	{u8 u8}		'TSP setting V/H'
		// 105	{u8 nu}		'Number of TSPs solar storage'
		// 106	{u8 u8}		'TSP setting solar storage'
		// Class 7: Fault History Data
		12: [  function(v) { return [convU8 (HB(v)      ), 'fault/buffer/size'                                ];} ],
		13: [  function(v) { return [convU8 (HB(v)      ), 'fault/buffer/index'                               ];},
			function(v) { return [convU8 (LB(v)      ), 'fault/buffer/value'                               ];} ],
		// 90	{u8 nu}		'Size of fault buffer V/H'
		// 91	{u8 u8}		'Fault buffer entry V/H'
		// 107	{u8 u8}		'Size of fault buffer solar storage'
		// 108	{u8 u8}		'Fault buffer entry solar storage'
		// Class 8: Control of Special Applications
		7: [  function(v) { return [convF88(   v       ), 'cooling_control'                                  ];} ],
		14: [  function(v) { return [convF88(   v       ), 'modulation/max_level_rel'                         ];} ],
		15: [  function(v) { return [convU8 (HB(v)      ), 'boiler/max_capacity'                              ];},
			function(v) { return [convU8 (LB(v)      ), 'modulation/min_level'                             ];} ],
		9: [  function(v) { return [convF88(   v       ), 'remote_override/room_setpoint'                    ];} ],
		100: [  function(v) { return [convBit(LB(v) & 1  ), 'remote_override/manual_change_priority'           ];},
			function(v) { return [convBit(LB(v) & 2  ), 'remote_override/program_change_priority'          ];} ],
	};


	try {

		const msgType   = msg.msgType;
		const dataId    = msg.dataid;
		const dataValue = msg.datavalue;
		const raw       = msg.payload;

		if (DevLogging){adapter.log.warn('Raw Data of values mapping :  ' + JSON.stringify(msg));}

		if (-1 != Object.keys(Map).indexOf(dataId.toString()) ){
			Map[dataId].forEach( function(f) {
				const res = f(dataValue);
				console.error(f(dataValue));
				const msgpayload = res[0];
				const msgtopic   = res[1];
				const msgraw     = raw;

				const objval = JSON.parse('{"msgraw":"' + msgraw + '", "DataId":"' + dataId + '", "msgType":"' + msgType + '", "Device":"' + msgtopic +  '", "Value":"' + msgpayload + '"}');
				outcome.push(objval);
			});

		} else {
			if (DevLogging){adapter.log.error('Unknown data ID ' + dataId + ' for '+ raw);}
		}
	} catch (error) {
		if (DevLogging){adapter.log.error('Non-opentherm message passed! '+ error);}
	}
	return outcome;
}

exports.translate_input = translate_input;