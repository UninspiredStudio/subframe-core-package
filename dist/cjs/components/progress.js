"use client";
'use strict';

var RadixProgress = require('@radix-ui/react-progress');
var classNames = require('classnames');
var React = require('react');
var progress_module = require('./progress.module.css.js');

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

var RadixProgress__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixProgress);

const DEFAULT_PROGRESS_VALUE = 0;
const ProgressContext = React.createContext(DEFAULT_PROGRESS_VALUE);
const Root = React.forwardRef(function ProgressRoot({ className, children, value, ...otherProps }, ref) {
    return (React.createElement(ProgressContext.Provider, { value: value || DEFAULT_PROGRESS_VALUE },
        React.createElement(RadixProgress__namespace.Root, { ref: ref, ...otherProps, value: value }, children)));
});
const Indicator = React.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    const progress = React.useContext(ProgressContext);
    return (React.createElement(RadixProgress__namespace.Indicator, { className: classNames(className, progress_module.indicator), ref: ref, asChild: true, style: { transform: `translateX(-${100 - progress}%)` }, ...otherProps }));
});
const Progress = { Root, Indicator };

exports.Indicator = Indicator;
exports.Progress = Progress;
exports.Root = Root;
//# sourceMappingURL=progress.js.map
