"use client";
'use strict';

var RadixRadioGroup = require('@radix-ui/react-radio-group');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var RadixRadioGroup__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixRadioGroup);

const Root = RadixRadioGroup__namespace.Root;
const Item = RadixRadioGroup__namespace.Item;
const Indicator = RadixRadioGroup__namespace.Indicator;
const RadioGroup = RadixRadioGroup__namespace.RadioGroup;
const RadioGroupItem = RadixRadioGroup__namespace.RadioGroupItem;
const RadioGroupIndicator = RadixRadioGroup__namespace.RadioGroupIndicator;
const createRadioGroupScope = RadixRadioGroup__namespace.createRadioGroupScope;

exports.Indicator = Indicator;
exports.Item = Item;
exports.RadioGroup = RadioGroup;
exports.RadioGroupIndicator = RadioGroupIndicator;
exports.RadioGroupItem = RadioGroupItem;
exports.Root = Root;
exports.createRadioGroupScope = createRadioGroupScope;
//# sourceMappingURL=radio-group.js.map
