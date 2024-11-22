"use strict";
"use client";
'use strict';

var RadixHoverCard = require('@radix-ui/react-hover-card');

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

var RadixHoverCard__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixHoverCard);

const Arrow = RadixHoverCard__namespace.Arrow;
const Content = RadixHoverCard__namespace.Content;
const HoverCard = RadixHoverCard__namespace.HoverCard;
const HoverCardArrow = RadixHoverCard__namespace.HoverCardArrow;
const HoverCardContent = RadixHoverCard__namespace.HoverCardContent;
const HoverCardPortal = RadixHoverCard__namespace.HoverCardPortal;
const HoverCardTrigger = RadixHoverCard__namespace.HoverCardTrigger;
const Portal = RadixHoverCard__namespace.Portal;
const Root = RadixHoverCard__namespace.Root;
const Trigger = RadixHoverCard__namespace.Trigger;
const createHoverCardScope = RadixHoverCard__namespace.createHoverCardScope;

exports.Arrow = Arrow;
exports.Content = Content;
exports.HoverCard = HoverCard;
exports.HoverCardArrow = HoverCardArrow;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardPortal = HoverCardPortal;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Portal = Portal;
exports.Root = Root;
exports.Trigger = Trigger;
exports.createHoverCardScope = createHoverCardScope;
//# sourceMappingURL=hover-card.js.map
