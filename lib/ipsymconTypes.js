var types = [
    'boolean',
    'number', // integer,
    'number', // float
    'string'
];

exports.symconTypes = function (common, val, symconProfile, symconVarType) {
    common = common || {};
    if (symconProfile === '~AirPressure.F' || symconProfile === '~AirPressure') {
        common.type = 'number';
        common.min = 850;
        common.max = 1100;
        common.unit = 'hPa';
        common.step = 50;
        common.role = 'value.pressure';
    } else
    if (symconProfile === '~Ampere') {
        common.type = 'number';
        common.unit = 'A';
        common.role = 'value.current';
    } else
    if (symconProfile === '~Intensity') {
        common.type = 'number';
        common.unit = '%';
        common.min = 0;
        common.max = 100;
        common.role = 'value.brightness';
        val *= 100;
    } else
    if (symconProfile === '~Illumination' || symconProfile === '~Illumination.F') {
        common.type = 'number';
        common.unit = 'lx';
        common.min = 0;
        common.max = 120000;
        common.role = 'value.brightness';
    } else
    if (symconProfile === '~Alert') {
        common.type = 'boolean';
        common.role = 'indicator.alert';
    } else
    if (symconProfile === '~Motion') {
        common.type = 'boolean';
        common.role = 'indicator.motion';
    } else
    if (symconProfile === '~Window') {
        common.type = 'boolean';
        common.role = 'state';
    } else
    if (symconProfile === '~Battery.100') {
        common.type = 'number';
        common.unit = '%';
        common.min = 0;
        common.max = 100;
        common.role = 'value.battery';
    } else
    if (symconProfile === '~Humidity' || symconProfile === '~Humidity.F') {
        common.type = 'number';
        common.unit = '%';
        common.min = 0;
        common.max = 100;
        common.role = 'value.humidity';
    } else
    if (symconProfile === '~Valve' || symconProfile === '~Valve.F') {
        common.type = 'number';
        common.unit = '%';
        common.min = 0;
        common.max = 100;
        common.role = 'level.valve';
    } else
    if (symconProfile === '~Shutter') {
        common.type = 'number';
        common.unit = '%';
        common.min = 0;
        common.max = 100;
        common.role = 'value.blind';
    } else
    if (symconProfile === '~HexColor') {
        common.type = 'string';
        common.role = 'rgb';
        val = '#' + (0x1000000 | val).toString(16).substring(1).toUpperCase();
    } else
    if (symconProfile === '~WindDirection' || symconProfile === '~WindDirection.F') {
        common.type = 'number';
        common.unit = '°';
        common.min = 0;
        common.max = 360;
        common.role = 'direction.wind';
    } else
    if (symconProfile === '~Battery') {
        common.type = 'boolean';
        common.role = 'indicator.battery';
    } else
    if (symconProfile === '~Flow') {
        common.type = 'number';
        common.unit = 'm3/h';
        common.role = 'value.flow';
    } else
    if (symconProfile === '~Temperature') {
        common.type = 'number';
        common.unit = '°C';
        commmn.max = 70;
        common.min = -30;
        common.role = 'value.temperature';
    } else
    if (symconProfile === '~Temperature.Room') {
        common.type = 'number';
        common.unit = '°C';
        commmn.max = 25;
        common.min = 12;
        common.role = 'level.temperature';
    } else
    if (symconProfile === '~Electricity') {
        common.type = 'number';
        common.unit = 'kWh';
        common.role = 'value.consumption';
    } else
    if (symconProfile === '~Power') {
        common.type = 'number';
        common.unit = 'kW';
        common.role = 'value.power';
    } else
    if (symconProfile === '~UnixTimestamp') {
        common.type = 'string';
        common.role = 'value.datetime';
        val = val ? new Date(val * 1000) : '';
    } else {
        common.type = types[symconVarType] || 'mixed';

        if (common.type === 'boolean') {
            val = val === true;
        } else if (common.type === 'number') {
            val = parseFloat(val);
        }
    }
    return {common: common, val: val};
};