"use client";
'use strict';

var RadixToggleGroup = require('@radix-ui/react-toggle-group');
var React = require('react');

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

var RadixToggleGroup__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixToggleGroup);

const Root = React.forwardRef(function Root({ className, type = "single", ...otherProps }, ref) {
    return React.createElement(RadixToggleGroup__namespace.Root, { ref: ref, className: className, type: type, ...otherProps });
});
const Item = RadixToggleGroup__namespace.Item;
const ToggleGroup = { Root, Item };

exports.Item = Item;
exports.Root = Root;
exports.ToggleGroup = ToggleGroup;
//# sourceMappingURL=toggle-group.js.map
