const attributes = {
	"master/status/ch": {
		 "channel": "status",
		 "name": "master_ch",
		 "description": "master ch",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 1
	},
	"master/status/dhw": {
		 "channel": "status",
		 "name": "master_dhw",
		 "description": "master dhw",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 2
	},
	"master/status/cooling": {
		 "channel": "status",
		 "name": "master_cooling",
		 "description": "master cooling",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 3
	},
	"master/status/otc": {
		 "channel": "status",
		 "name": "master_otc",
		 "description": "master otc",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 4
	},
	"master/status/ch2": {
		 "channel": "status",
		 "name": "master_ch2",
		 "description": "master ch3",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 5
	},
	"master/status/summer_mode": {
		 "channel": "status",
		 "name": "master_summer_mode",
		 "description": "master summer mode",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 6
	},
	"master/status/dhw_blocking": {
		 "channel": "status",
		 "name": "master_dhw_blocking",
		 "description": "master dhw blocking",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 7
	},
	"slave/status/fault": {
		 "channel": "fault",
		 "name": "slave_fault",
		 "description": "slave fault",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 8
	},
	"slave/status/ch": {
		 "channel": "status",
		 "name": "slave_ch",
		 "description": "slave ch",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 9
	},
	"slave/status/dhw": {
		 "channel": "status",
		 "name": "slave_dhw",
		 "description": "slave dhw",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 10
	},
	"slave/status/flame": {
		 "channel": "status",
		 "name": "slave_flame",
		 "description": "slave flame",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 11
	},
	"slave/status/cooling": {
		 "channel": "status",
		 "name": "slave_cooling",
		 "description": "slave cooling",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 12
	},
	"slave/status/ch2": {
		 "channel": "status",
		 "name": "slave_ch2",
		 "description": "slave ch3",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 13
	},
	"slave/status/diagnostic": {
		 "channel": "status",
		 "name": "slave_diagnostic",
		 "description": "slave diagnostic",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 14
	},
	"slave/status/electricity_prod": {
		 "channel": "status",
		 "name": "slave_electricity_prod",
		 "description": "slave electricity prod",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 15
	},
	"control/setpoint": {
		 "channel": "control",
		 "name": "setpoint",
		 "description": "setpoint",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_1",
		 "index": 16
	},
	"fault/service_request": {
		 "channel": "fault",
		 "name": "service_request",
		 "description": "service request",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 17
	},
	"fault/lockout_reset": {
		 "channel": "fault",
		 "name": "lockout_reset",
		 "description": "lockout reset",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 18
	},
	"fault/low_water_pressure": {
		 "channel": "fault",
		 "name": "low_water_pressure",
		 "description": "low water pressure",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 19
	},
	"fault/gas_flame": {
		 "channel": "fault",
		 "name": "gas_flame",
		 "description": "gas flame",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 20
	},
	"fault/air_pressure": {
		 "channel": "fault",
		 "name": "air_pressure",
		 "description": "air pressure",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 21
	},
	"fault/water_overtemp": {
		 "channel": "fault",
		 "name": "water_overtemp",
		 "description": "water overtemp",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 22
	},
	"fault/oem_code": {
		 "channel": "fault",
		 "name": "oem_code",
		 "description": "oem code",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 23
	},
	"control/setpoint2": {
		 "channel": "control",
		 "name": "setpoint2",
		 "description": "setpoint3",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_1",
		 "index": 24
	},
	"Status V/H": {
		 "channel": "status",
		 "name": "V_H",
		 "description": "V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 25
	},
	"Control setpoint V/H": {
		 "channel": "control",
		 "name": "Control_setpoint_V_H",
		 "description": "Control setpoint V H",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_1",
		 "index": 26
	},
	"Fault flags/code V/H": {
		 "channel": "fault",
		 "name": "Fault_flags_code_V_H",
		 "description": "Fault flags/code V/H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 27
	},
	"OEM diagnostic code V/H": {
		 "channel": "info",
		 "name": "OEM_diagnostic_code_V_H",
		 "description": "OEM diagnostic code V/H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 28
	},
	"Solar storage mode and status": {
		 "channel": "status",
		 "name": "solar_mode_state",
		 "description": "Solar storage mode and status",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 29
	},
	"Solar storage fault flags": {
		 "channel": "info",
		 "name": "Solar_storage_fault_flags",
		 "description": "Solar storage fault flags",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 30
	},
	"diagnostic/oem_code": {
		 "channel": "info",
		 "name": "diagnostic_oem_code",
		 "description": "diagnostic oem code",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_1",
		 "index": 31
	},
	"master/member_id": {
		 "channel": "info",
		 "name": "master_member_id",
		 "description": "master member id",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 32
	},
	"slave/config/dhw_present": {
		 "channel": "config",
		 "name": "slave_dhw_present",
		 "description": "slave dhw present",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 33
	},
	"slave/config/control_type": {
		 "channel": "config",
		 "name": "slave_control_type",
		 "description": "slave control type",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 34
	},
	"slave/config/cooling_config": {
		 "channel": "config",
		 "name": "slave_cooling_config",
		 "description": "slave cooling config",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 35
	},
	"slave/config/dhw_config": {
		 "channel": "config",
		 "name": "slave_dhw_config",
		 "description": "slave dhw config",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 36
	},
	"slave/config/master_low_off_and_pump_control": {
		 "channel": "config",
		 "name": "slave_config_master_low_off_and_pump_control",
		 "description": "slave config master low off and pump control",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 37
	},
	"slave/config/ch2_present": {
		 "channel": "config",
		 "name": "slave_ch2_present",
		 "description": "slave ch2 present",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 38
	},
	"slave/member_id": {
		 "channel": "info",
		 "name": "slave_member_id",
		 "description": "slave member id",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 39
	},
	"Configuration/memberid V/H": {
		 "channel": "control",
		 "name": "Configuration_memberid_V_H",
		 "description": "Configuration memberid V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 40
	},
	"OpenTherm version V/H": {
		 "channel": "info",
		 "name": "OpenTherm_version_V_H",
		 "description": "OpenTherm version V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 41
	},
	"Product version V/H": {
		 "channel": "info",
		 "name": "Product_version_V_H",
		 "description": "Product version V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 42
	},
	"Solar storage config/memberid": {
		 "channel": "control",
		 "name": "Solar_storage_config_memberid",
		 "description": "Solar storage config memberid",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 43
	},
	"Solar storage product version": {
		 "channel": "info",
		 "name": "Solar_storage_product_version",
		 "description": "Solar storage product version",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 44
	},
	"master/opentherm_version": {
		 "channel": "info",
		 "name": "master_opentherm_version",
		 "description": "master opentherm version",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 45
	},
	"slave/opentherm_version": {
		 "channel": "info",
		 "name": "slave_opentherm_version",
		 "description": "slave opentherm version",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 46
	},
	"master/product_type": {
		 "channel": "info",
		 "name": "master_product_type",
		 "description": "master product type",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 47
	},
	"master/product_version": {
		 "channel": "info",
		 "name": "master_product_version",
		 "description": "master product version",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 48
	},
	"slave/product_type": {
		 "channel": "info",
		 "name": "slave_product_type",
		 "description": "slave product type",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 49
	},
	"slave/product_version": {
		 "channel": "info",
		 "name": "slave_product_version",
		 "description": "slave product version",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_2",
		 "index": 50
	},
	"command_code": {
		 "channel": "control",
		 "name": "command_code",
		 "description": "command code",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_3",
		 "index": 51
	},
	"command_response_code": {
		 "channel": "control",
		 "name": "command_response_code",
		 "description": "command response code",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_3",
		 "index": 52
	},
	"room/setpoint": {
		 "channel": "control",
		 "name": "room_setpoint",
		 "description": "room setpoint",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 53
	},
	"modulation/level": {
		 "channel": "",
		 "name": "modulation_level",
		 "description": "modulation level",
		 "role": "value",
		 "unit": "%",
		 "write": false,
		 "class": "Class_4",
		 "index": 54
	},
	"ch/water_pressure": {
		 "channel": "",
		 "name": "ch_water_pressure",
		 "description": "ch water pressure",
		 "role": "value",
		 "unit": "bar",
		 "write": false,
		 "class": "Class_4",
		 "index": 55
	},
	"dhw/flow_rate": {
		 "channel": "",
		 "name": "dhw_flow_rate",
		 "description": "dhw flow rate",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 56
	},
	"date/day_of_week": {
		 "channel": "info",
		 "name": "date_day_of_week",
		 "description": "date day of week",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 57
	},
	"date/hours": {
		 "channel": "info",
		 "name": "date_hours",
		 "description": "date hours",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 58
	},
	"date/minutes": {
		 "channel": "info",
		 "name": "date_minutes",
		 "description": "date minutes",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 59
	},
	"date/month": {
		 "channel": "info",
		 "name": "date_month",
		 "description": "date month",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 60
	},
	"date/day_of_month": {
		 "channel": "info",
		 "name": "date_day_of_month",
		 "description": "date day of month",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 61
	},
	"date/year": {
		 "channel": "info",
		 "name": "date_year",
		 "description": "date year",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 62
	},
	"room/setpoint_ch2": {
		 "channel": "control",
		 "name": "room_setpoint_ch2",
		 "description": "room setpoint ch3",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 63
	},
	"room/temp": {
		 "channel": "",
		 "name": "room_temp",
		 "description": "room temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 64
	},
	"boiler/temp": {
		 "channel": "",
		 "name": "boiler_temp",
		 "description": "boiler temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 65
	},
	"dhw/temp": {
		 "channel": "",
		 "name": "dhw_temp",
		 "description": "dhw temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 66
	},
	"outside/temp": {
		 "channel": "",
		 "name": "outside_temp",
		 "description": "outside temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 67
	},
	"return/temp": {
		 "channel": "",
		 "name": "return_temp",
		 "description": "return temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 68
	},
	"solar/storage_temp": {
		 "channel": "",
		 "name": "solar_storage_temp",
		 "description": "solar storage temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 69
	},
	"solar/collector_temp": {
		 "channel": "",
		 "name": "solar_collector_temp",
		 "description": "solar collector temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 70
	},
	"ch2/flow_temp": {
		 "channel": "",
		 "name": "ch2_flow_temp",
		 "description": "ch2 flow temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 71
	},
	"dhw2/temp": {
		 "channel": "",
		 "name": "dhw2_temp",
		 "description": "dhw2 temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 72
	},
	"exhaust/temp": {
		 "channel": "",
		 "name": "exhaust_temp",
		 "description": "exhaust temp",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 73
	},
	"Boiler heat exchanger temperature": {
		 "channel": "",
		 "name": "Boiler_heat_exchanger_temperature",
		 "description": "Boiler heat exchanger temperature",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 74
	},
	"Boiler fan speed and setpoint": {
		 "channel": "control",
		 "name": "Boiler_fan_speed_and_setpoint",
		 "description": "Boiler fan speed and setpoint",
		 "role": "value.speed",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 75
	},
	"Relative ventilation": {
		 "channel": "",
		 "name": "Relative_ventilation",
		 "description": "Relative ventilation",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 76
	},
	"Relative humidity exhaust air": {
		 "channel": "",
		 "name": "Relative_humidity_exhaust_air",
		 "description": "Relative humidity exhaust air",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 77
	},
	"CO2 level exhaust air": {
		 "channel": "",
		 "name": "CO2_level_exhaust_air",
		 "description": "CO2 level exhaust air",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 78
	},
	"Supply inlet temperature": {
		 "channel": "",
		 "name": "Supply_inlet_temperature",
		 "description": "Supply inlet temperature",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 79
	},
	"Supply outlet temperature": {
		 "channel": "",
		 "name": "Supply_outlet_temperature",
		 "description": "Supply outlet temperature",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 80
	},
	"Exhaust inlet temperature": {
		 "channel": "",
		 "name": "Exhaust_inlet_temperature",
		 "description": "Exhaust inlet temperature",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 81
	},
	"Exhaust outlet temperature": {
		 "channel": "",
		 "name": "Exhaust_outlet_temperature",
		 "description": "Exhaust outlet temperature",
		 "role": "value.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_4",
		 "index": 82
	},
	"Exhaust fan speed": {
		 "channel": "",
		 "name": "Exhaust_fan_speed",
		 "description": "Exhaust fan speed",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 83
	},
	"Inlet fan speed": {
		 "channel": "",
		 "name": "Inlet_fan_speed",
		 "description": "Inlet fan speed",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 84
	},
	"Unsuccessful burner starts": {
		 "channel": "",
		 "name": "Unsuccessful_burner_starts",
		 "description": "Unsuccessful burner starts",
		 "role": "level",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 85
	},
	"Flame signal too low count": {
		 "channel": "",
		 "name": "Flame_signal_too_low_count",
		 "description": "Flame signal too low count",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 86
	},
	"burner/starts": {
		 "channel": "",
		 "name": "burner_starts",
		 "description": "burner starts",
		 "role": "level",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 87
	},
	"ch/pump_starts": {
		 "channel": "",
		 "name": "ch_pump_starts",
		 "description": "ch pump starts",
		 "role": "level",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 88
	},
	"dhw/pump_starts": {
		 "channel": "",
		 "name": "dhw_pump_starts",
		 "description": "dhw pump starts",
		 "role": "level",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 89
	},
	"dhw/burner_starts": {
		 "channel": "",
		 "name": "dhw_burner_starts",
		 "description": "dhw burner starts",
		 "role": "level",
		 "unit": "",
		 "write": false,
		 "class": "Class_4",
		 "index": 90
	},
	"burner/hours": {
		 "channel": "",
		 "name": "burner_hours",
		 "description": "burner hours",
		 "role": "value",
		 "unit": "h",
		 "write": false,
		 "class": "Class_4",
		 "index": 91
	},
	"ch/pump_hours": {
		 "channel": "",
		 "name": "ch_pump_hours",
		 "description": "ch pump hours",
		 "role": "value",
		 "unit": "h",
		 "write": false,
		 "class": "Class_4",
		 "index": 92
	},
	"dhw/pump_hours": {
		 "channel": "",
		 "name": "dhw_pump_hours",
		 "description": "dhw pump hours",
		 "role": "value",
		 "unit": "h",
		 "write": false,
		 "class": "Class_4",
		 "index": 93
	},
	"dhw/burner_hours": {
		 "channel": "",
		 "name": "dhw_burner_hours",
		 "description": "dhw burner hours",
		 "role": "value",
		 "unit": "h",
		 "write": false,
		 "class": "Class_4",
		 "index": 94
	},
	"remote_parameter/transfer_enable/dhw_setpoint": {
		 "channel": "control",
		 "name": "remote_parameter_transfer_enable_dhw_setpoint",
		 "description": "remote parameter transfer enable dhw setpoint",
		 "role": "level.temperature",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 95
	},
	"remote_parameter/transfer_enable/ch_max_setpoint": {
		 "channel": "control",
		 "name": "remote_parameter_transfer_enable_ch_max_setpoint",
		 "description": "remote parameter transfer enable ch max setpoint",
		 "role": "level.temperature",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 96
	},
	"remote_parameter/rw_flags/dhw_setpoint": {
		 "channel": "control",
		 "name": "remote_parameter_rw_flags_dhw_setpoint",
		 "description": "remote parameter rw flags dhw setpoint",
		 "role": "level.temperature",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 97
	},
	"remote_parameter/rw_flags/ch_max_setpoint": {
		 "channel": "control",
		 "name": "remote_parameter_rw_flags_ch_max_setpoint",
		 "description": "remote parameter rw flags ch max setpoint",
		 "role": "level.temperature",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 98
	},
	"dhw/setpoint_upper": {
		 "channel": "control",
		 "name": "dhw_setpoint_upper",
		 "description": "dhw setpoint upper",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_5",
		 "index": 99
	},
	"dhw/setpoint_lower": {
		 "channel": "control",
		 "name": "dhw_setpoint_lower",
		 "description": "dhw setpoint lower",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_5",
		 "index": 100
	},
	"ch/max_setpoint_upper": {
		 "channel": "control",
		 "name": "ch_max_setpoint_upper",
		 "description": "ch max setpoint upper",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_5",
		 "index": 101
	},
	"ch/max_setpoint_lower": {
		 "channel": "control",
		 "name": "ch_max_setpoint_lower",
		 "description": "ch max setpoint lower",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_5",
		 "index": 102
	},
	"OTC heat curve ratio boundaries": {
		 "channel": "config",
		 "name": "OTC_heat_curve_ratio_boundaries",
		 "description": "OTC heat curve ratio boundaries",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 103
	},
	"Remote parameter 4 boundaries": {
		 "channel": "control",
		 "name": "Remote_parameter_4_boundaries",
		 "description": "Remote parameter 4 boundaries",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 104
	},
	"Remote parameter 5 boundaries": {
		 "channel": "control",
		 "name": "Remote_parameter_5_boundaries",
		 "description": "Remote parameter 5 boundaries",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 105
	},
	"Remote parameter 6 boundaries": {
		 "channel": "control",
		 "name": "Remote_parameter_6_boundaries",
		 "description": "Remote parameter 6 boundaries",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 106
	},
	"Remote parameter 7 boundaries": {
		 "channel": "control",
		 "name": "Remote_parameter_7_boundaries",
		 "description": "Remote parameter 7 boundaries",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 107
	},
	"Remote parameter 8 boundaries": {
		 "channel": "control",
		 "name": "Remote_parameter_8_boundaries",
		 "description": "Remote parameter 8 boundaries",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 108
	},
	"dhw/setpoint": {
		 "channel": "control",
		 "name": "dhw_setpoint",
		 "description": "dhw setpoint",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_5",
		 "index": 109
	},
	"ch/max_water_setpoint": {
		 "channel": "control",
		 "name": "ch_max_water_setpoint",
		 "description": "ch max water setpoint",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_5",
		 "index": 110
	},
	"OTC heat curve ratio": {
		 "channel": "config",
		 "name": "OTC_heat_curve_ratio",
		 "description": "OTC heat curve ratio",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 111
	},
	"Remote parameter 4": {
		 "channel": "config",
		 "name": "Remote_parameter_4",
		 "description": "Remote parameter 4",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 112
	},
	"Remote parameter 5": {
		 "channel": "config",
		 "name": "Remote_parameter_5",
		 "description": "Remote parameter 5",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 113
	},
	"Remote parameter 6": {
		 "channel": "config",
		 "name": "Remote_parameter_6",
		 "description": "Remote parameter 6",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 114
	},
	"Remote parameter 7": {
		 "channel": "config",
		 "name": "Remote_parameter_7",
		 "description": "Remote parameter 7",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 115
	},
	"Remote parameter 8": {
		 "channel": "config",
		 "name": "Remote_parameter_8",
		 "description": "Remote parameter 8",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 116
	},
	"Remote parameter settings V/H": {
		 "channel": "config",
		 "name": "Remote_parameter_settings_V_H",
		 "description": "Remote parameter settings V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 117
	},
	"Nominal ventilation value": {
		 "channel": "config",
		 "name": "Nominal_ventilation_value",
		 "description": "Nominal ventilation value",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_5",
		 "index": 118
	},
	"tsp/number_supported": {
		 "channel": "info",
		 "name": "tsp_number_supported",
		 "description": "tsp number supported",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 119
	},
	"tsp/index": {
		 "channel": "info",
		 "name": "tsp_index",
		 "description": "tsp index",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 120
	},
	"tsp/value": {
		 "channel": "info",
		 "name": "tsp_value",
		 "description": "tsp value",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 121
	},
	"Number of TSPs V/H": {
		 "channel": "info",
		 "name": "Number_of_TSPs_V_H",
		 "description": "Number of TSPs V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 122
	},
	"TSP setting V/H": {
		 "channel": "control",
		 "name": "TSP_setting_V_H",
		 "description": "TSP setting V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 123
	},
	"Number of TSPs solar storage": {
		 "channel": "info",
		 "name": "Number_of_TSPs_solar_storage",
		 "description": "Number of TSPs solar storage",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 124
	},
	"TSP setting solar storage": {
		 "channel": "control",
		 "name": "TSP_setting_solar_storage",
		 "description": "TSP setting solar storage",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_6",
		 "index": 125
	},
	"fault/buffer/size": {
		 "channel": "fault",
		 "name": "buffer_size",
		 "description": "buffer size",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 126
	},
	"fault/buffer/index": {
		 "channel": "fault",
		 "name": "buffer_index",
		 "description": "buffer index",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 127
	},
	"fault/buffer/value": {
		 "channel": "fault",
		 "name": "buffer_value",
		 "description": "buffer value",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 128
	},
	"Size of fault buffer V/H": {
		 "channel": "fault",
		 "name": "Size_of_fault_buffer_V_H",
		 "description": "Size of fault buffer V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 129
	},
	"Fault buffer entry V/H": {
		 "channel": "fault",
		 "name": "buffer_entry__V_H",
		 "description": "buffer entry  V H",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 130
	},
	"Size of fault buffer solar storage": {
		 "channel": "fault",
		 "name": "Size_of_fault__buffer_solar_storage",
		 "description": "Size of fault  buffer solar storage",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 131
	},
	"Fault buffer entry solar storage": {
		 "channel": "fault",
		 "name": "buffer_entry_solar_storage",
		 "description": "buffer entry solar storage",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_7",
		 "index": 132
	},
	"cooling_control": {
		 "channel": "control",
		 "name": "cooling_control",
		 "description": "cooling control",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_8",
		 "index": 133
	},
	"modulation/max_level_rel": {
		 "channel": "",
		 "name": "modulation_max_level_rel",
		 "description": "modulation max level rel",
		 "role": "value",
		 "unit": "%",
		 "write": false,
		 "class": "Class_8",
		 "index": 134
	},
	"boiler/max_capacity": {
		 "channel": "info",
		 "name": "boiler_max_capacity",
		 "description": "boiler max capacity",
		 "role": "value.max",
		 "unit": "",
		 "write": false,
		 "class": "Class_8",
		 "index": 135
	},
	"modulation/min_level": {
		 "channel": "",
		 "name": "modulation_min_level",
		 "description": "modulation min level",
		 "role": "value",
		 "unit": "%",
		 "write": false,
		 "class": "Class_8",
		 "index": 136
	},
	"remote_override/room_setpoint": {
		 "channel": "control",
		 "name": "remote_override_room_setpoint",
		 "description": "remote override room setpoint",
		 "role": "level.temperature",
		 "unit": "°C",
		 "write": false,
		 "class": "Class_8",
		 "index": 137
	},
	"remote_override/manual_change_priority": {
		 "channel": "control",
		 "name": "remote_override_manual_change_priority",
		 "description": "remote override manual change priority",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_8",
		 "index": 138
	},
	"remote_override/program_change_priority": {
		 "channel": "control",
		 "name": "remote_override_program_change_priority",
		 "description": "remote override program change priority",
		 "role": "value",
		 "unit": "",
		 "write": false,
		 "class": "Class_8",
		 "index": 139
	}
}

module.exports = attributes;