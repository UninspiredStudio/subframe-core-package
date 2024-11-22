"use client";
'use strict';

var RadixCheckbox = require('@radix-ui/react-checkbox');

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

var RadixCheckbox__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixCheckbox);

const Checkbox = RadixCheckbox__namespace.Checkbox;
const CheckboxIndicator = RadixCheckbox__namespace.CheckboxIndicator;
const Indicator = RadixCheckbox__namespace.Indicator;
const Root = RadixCheckbox__namespace.Root;
const createCheckboxScope = RadixCheckbox__namespace.createCheckboxScope;

exports.Checkbox = Checkbox;
exports.CheckboxIndicator = CheckboxIndicator;
exports.Indicator = Indicator;
exports.Root = Root;
exports.createCheckboxScope = createCheckboxScope;
//# sourceMappingURL=checkbox.js.map
