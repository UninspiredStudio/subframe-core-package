"use client";
'use strict';

var RadixDialog = require('@radix-ui/react-dialog');
var classNames = require('classnames');
var React = require('react');
var fullscreenDialog_module = require('./fullscreen-dialog.module.css.js');

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

var RadixDialog__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixDialog);

const Root = React.forwardRef(function FullScreenDialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React.createElement(RadixDialog__namespace.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(RadixDialog__namespace.Portal, null,
            React.createElement(RadixDialog__namespace.Overlay, { className: fullscreenDialog_module.root },
                React.createElement(RadixDialog__namespace.Content, { ref: ref, asChild: true, className: classNames(className, fullscreenDialog_module.content), ...otherProps })))));
});
const FullScreenDialog = { Root };

exports.FullScreenDialog = FullScreenDialog;
exports.Root = Root;
//# sourceMappingURL=fullscreen-dialog.js.map
