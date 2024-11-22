"use client";
'use strict';

var RadixPopover = require('@radix-ui/react-popover');

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

var RadixPopover__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixPopover);

const Anchor = RadixPopover__namespace.Anchor;
const Arrow = RadixPopover__namespace.Arrow;
const Close = RadixPopover__namespace.Close;
const Content = RadixPopover__namespace.Content;
const Popover = RadixPopover__namespace.Popover;
const PopoverAnchor = RadixPopover__namespace.PopoverAnchor;
const PopoverArrow = RadixPopover__namespace.PopoverArrow;
const PopoverClose = RadixPopover__namespace.PopoverClose;
const PopoverContent = RadixPopover__namespace.PopoverContent;
const PopoverPortal = RadixPopover__namespace.PopoverPortal;
const PopoverTrigger = RadixPopover__namespace.PopoverTrigger;
const Portal = RadixPopover__namespace.Portal;
const Root = RadixPopover__namespace.Root;
const Trigger = RadixPopover__namespace.Trigger;
const createPopoverScope = RadixPopover__namespace.createPopoverScope;

exports.Anchor = Anchor;
exports.Arrow = Arrow;
exports.Close = Close;
exports.Content = Content;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverArrow = PopoverArrow;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverPortal = PopoverPortal;
exports.PopoverTrigger = PopoverTrigger;
exports.Portal = Portal;
exports.Root = Root;
exports.Trigger = Trigger;
exports.createPopoverScope = createPopoverScope;
//# sourceMappingURL=popover.js.map
