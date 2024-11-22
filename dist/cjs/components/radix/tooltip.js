"use client";
'use strict';

var RadixTooltip = require('@radix-ui/react-tooltip');

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

var RadixTooltip__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixTooltip);

const Root = RadixTooltip__namespace.Root;
const Tooltip = RadixTooltip__namespace.Tooltip;
const TooltipArrow = RadixTooltip__namespace.TooltipArrow;
const TooltipContent = RadixTooltip__namespace.TooltipContent;
const TooltipPortal = RadixTooltip__namespace.TooltipPortal;
const TooltipProvider = RadixTooltip__namespace.TooltipProvider;
const TooltipTrigger = RadixTooltip__namespace.TooltipTrigger;
const Arrow = RadixTooltip__namespace.Arrow;
const Content = RadixTooltip__namespace.Content;
const Portal = RadixTooltip__namespace.Portal;
const Provider = RadixTooltip__namespace.Provider;
const Trigger = RadixTooltip__namespace.Trigger;
const createTooltipScope = RadixTooltip__namespace.createTooltipScope;

exports.Arrow = Arrow;
exports.Content = Content;
exports.Portal = Portal;
exports.Provider = Provider;
exports.Root = Root;
exports.Tooltip = Tooltip;
exports.TooltipArrow = TooltipArrow;
exports.TooltipContent = TooltipContent;
exports.TooltipPortal = TooltipPortal;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.Trigger = Trigger;
exports.createTooltipScope = createTooltipScope;
//# sourceMappingURL=tooltip.js.map
