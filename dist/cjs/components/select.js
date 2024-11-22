"use client";
'use strict';

var RadixSelect = require('@radix-ui/react-select');
var classNames = require('classnames');
var React = require('react');
var select_module = require('./select.module.css.js');

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

var RadixSelect__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixSelect);

const Root = React.forwardRef(function SelectRoot({ children, ...otherProps }, _ref) {
    return React.createElement(RadixSelect__namespace.Root, { ...otherProps }, children);
});
const Trigger = React.forwardRef(function Trigger({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixSelect__namespace.Trigger, { className: classNames(className, select_module.trigger), ref: ref, ...otherProps }, children));
});
const Value = React.forwardRef(function Value({ children, // NOTE: ignored
placeholder, className, ...otherProps }, ref) {
    return (
    // NOTE: this needs a wrapper since Radix strips all styling from RadixSelect.Value
    React.createElement("span", { className: classNames(className, select_module.value), ...otherProps, ref: ref },
        React.createElement(RadixSelect__namespace.Value, { placeholder: placeholder })));
});
const Content = React.forwardRef(function Content({ className, children, portalClassName, position = "popper", sideOffset = 4, ...otherProps }, ref) {
    return (React.createElement(RadixSelect__namespace.Portal, { className: portalClassName },
        React.createElement(RadixSelect__namespace.Content, { className: classNames(className, select_module.content), ref: ref, position: position, sideOffset: sideOffset, ...otherProps },
            React.createElement(Select.Viewport, { asChild: true }, children))));
});
const Viewport = React.forwardRef(function Viewport({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixSelect__namespace.Viewport, { className: classNames(className, select_module.viewport), ref: ref, ...otherProps }, children));
});
const Item = React.forwardRef(function Item({ className, children, value, ...otherProps }, ref) {
    return (React.createElement(RadixSelect__namespace.Item, { className: classNames(className, select_module.item), ref: ref, value: value, ...otherProps }, children));
});
const ItemText = RadixSelect__namespace.ItemText;
const Select = {
    Root,
    Trigger,
    Value,
    Content,
    Viewport,
    Item,
    ItemText,
};

exports.Content = Content;
exports.Item = Item;
exports.ItemText = ItemText;
exports.Root = Root;
exports.Select = Select;
exports.Trigger = Trigger;
exports.Value = Value;
exports.Viewport = Viewport;
//# sourceMappingURL=select.js.map
