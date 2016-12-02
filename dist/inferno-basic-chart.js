(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('inferno')) :
	typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	(global.Inferno = global.Inferno || {}, global.Inferno.BasicChart = factory(global.Inferno));
}(this, (function (Inferno) { 'use strict';

Inferno = 'default' in Inferno ? Inferno['default'] : Inferno;

function BasicChart() {
	return Inferno.createVNode(2, "div", {
		"className": "inferno-basic-chart"
	});
}

return BasicChart;

})));
