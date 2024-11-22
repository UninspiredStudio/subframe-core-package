"use client";
'use strict';

var RadixDialog = require('@radix-ui/react-dialog');
var classNames = require('classnames');
var React = require('react');
var dialog_module = require('./dialog.module.css.js');

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

const Root = React.forwardRef(function Dialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React.createElement(RadixDialog__namespace.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(RadixDialog__namespace.Portal, null,
            React.createElement(RadixDialog__namespace.Overlay, { ref: ref, asChild: true, className: classNames(className, dialog_module.root), ...otherProps }))));
});
const Content = React.forwardRef(function Content({ onOpenAutoFocus, initialFocusRef, ...otherProps }, ref) {
    const onOpenAutoFocusCallback = React.useCallback((e) => {
        if (initialFocusRef) {
            e.preventDefault();
            initialFocusRef.current?.focus();
        }
        onOpenAutoFocus?.(e);
    }, [initialFocusRef, onOpenAutoFocus]);
    return React.createElement(RadixDialog__namespace.Content, { ref: ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback, ...otherProps });
});
const Dialog = { Root, Content };

exports.Content = Content;
exports.Dialog = Dialog;
exports.Root = Root;
//# sourceMappingURL=dialog.js.map
