const supported_objects = {
	"airpresfault" 	:	{
		"id"	:	"",
		"role" 	:	"info.airpressure",
		"type" 	:	"boolean",
		"unit" 	:	"",
		"write"	: 	false
		},
	"boilertemp"	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"boilertemp2"	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"chbh"	: 	{
		"id"	:	"",
		"role" 	:	"value.value",
		"type"	:	"number",
		"unit"	:	"h",
		"write" : 	false
		},
	"chbs"	: 	{
		"id"	:	"",
		"role" 	:	"value.value",
		"type"	:	"number",
		"unit"	:	"",
		"write" : 	false
		},
	"chenable"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"ch2enable"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},		
	"chmode"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"chph"	: 	{
		"id"	:	"",
		"role" 	:	"value.value",
		"type"	:	"number",
		"unit"	:	"h",
		"write" : 	false
		},
	"chps"	: 	{
		"id"	:	"",
		"role" 	:	"value.value",
		"type"	:	"number",
		"unit"	:	"",
		"write" : 	false
		},
	"ch2mode"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"chwsetpoint" 	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"controlsp"	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"controlsp2"	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"coolingenable"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"coolingstatus"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"dhwbs"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"dhwbh"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"h",
		"write" : 	false
		},	
	"dhwenable"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"dhwmode"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"dhwps"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"dhwph"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"h",
		"write" : 	false
		},	
	"dhwsetpoint" 	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"dhwtemp" 	:	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"dhwtemp2" 	:	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"diag"	: 	{
		"id"	:	"",
		"role" 	:	"info.software",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
			},
	"fault"	: 	{
		"id"	:	"",
		"role" 	:	"info.software",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
			},
	"faultcode"	: 	{
		"id"	:	"",
		"role" 	:	"info.software",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
			},
	"flame"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"flamefault"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
			},
	"lockoutreset"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"lowpressure"	: 	{
		"id"	:	"",
		"role" 	:	"state.switch",
		"type"	:	"boolean",
		"unit"	:	"",
		"write" : 	false
		},
	"maxmod"	: 	{
		"id"	:	"",
		"role" 	:	"level.maxmod",
		"type"	:	"number",
		"unit"	:	"%",
		"write" : 	false
		},
	"modulation": 	{
		"id"	:	"",
		"role" 	:	"level.modulation",
		"type"	:	"number",
		"unit"	:	"%",
		"write" : 	false
		},
	"nrtsp": 	{
		"id"	:	"",
		"role" 	:	"value.number",
		"type"	:	"number",
		"unit"	:	"%",
		"write" : 	false
		},
	"otcstate"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
		},
	"otgw"	: 	{
		"id"	:	"",
		"role" 	:	"",
		"type"	:	"",
		"unit"	:	"",
		"write" : 	false
			},
	"outside"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
		},
	"override" 	:	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"overtemp" 	:	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type" 	:	"number",
		"unit" 	:	"°C",
		"write"	: 	false
		},
	"pressure"	: 	{
		"id"	:	"",
		"role" 	:	"value.pressure",
		"type"	:	"number",
		"unit"	:	"bar",
		"write" : 	false
			},
	"remoov"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
		},			
	"returntemp"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
		},
	"roomtemp"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
			},
	"roomtemp2"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
			},
	"setpoint"	: 	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
			},
	"setpoint2"	: 	{
		"id"	:	"",
		"role" 	:	"level.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
			},
	"service"	: 	{
		"id"	:	"",
		"role" 	:	"info.software",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
			},
	"solarstortmp"	: 	{
		"id"	:	"",
		"role" 	:	"value.temperature",
		"type"	:	"number",
		"unit"	:	"°C",
		"write" : 	false
			},
	"timestamp"	: 	{
		"id"	:	"",
		"role" 	:	"info.software",
		"type"	:	"string",
		"unit"	:	"",
		"write" : 	false
			}
	}

module.exports = supported_objects;