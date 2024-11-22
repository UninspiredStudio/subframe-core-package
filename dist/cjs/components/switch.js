"use strict";
"use client";
'use strict';

var RadixSwitch = require('@radix-ui/react-switch');
var classNames = require('classnames');
var React = require('react');
var switch_module = require('./switch.module.css.js');

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

var RadixSwitch__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixSwitch);

const Root = React.forwardRef(function Switch2({ className, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(RadixSwitch__namespace.Root, { ref, className: classNames(className, switch_module.root), ...otherProps });
});
const Thumb = React.forwardRef(function Thumb2({ className, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(RadixSwitch__namespace.Thumb, { ref, className: classNames(className, switch_module.thumb), ...otherProps });
});
const Switch = { Root, Thumb };

exports.Root = Root;
exports.Switch = Switch;
exports.Thumb = Thumb;
//# sourceMappingURL=switch.js.map
