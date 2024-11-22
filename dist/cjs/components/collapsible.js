"use strict";
"use client";
'use strict';

var RadixCollapsible = require('@radix-ui/react-collapsible');
var reactSlot = require('@radix-ui/react-slot');
var classNames = require('classnames');
var React = require('react');
var collapsible_module = require('./collapsible.module.css.js');

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

var RadixCollapsible__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixCollapsible);

const Chevron = React.forwardRef(
  function CollapsibleChevron({ className, ...otherProps }, ref) {
    return /* @__PURE__ */ React.createElement(
      reactSlot.Slot,
      {
        ref,
        className: classNames(className, collapsible_module.chevron),
        ...otherProps
      }
    );
  }
);
const Trigger = React.forwardRef(function Trigger2({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(
    RadixCollapsible__namespace.Trigger,
    {
      className: classNames(className, collapsible_module.trigger),
      ref,
      ...otherProps
    },
    children
  );
});
const Content = React.forwardRef(function Content2({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(
    RadixCollapsible__namespace.Content,
    {
      className: classNames(className, collapsible_module.content),
      ref,
      ...otherProps
    },
    children
  );
});
const Root = RadixCollapsible__namespace.Root;
const Collapsible = {
  Root,
  Trigger,
  Content,
  Chevron
};

exports.Chevron = Chevron;
exports.Collapsible = Collapsible;
exports.Content = Content;
exports.Root = Root;
exports.Trigger = Trigger;
//# sourceMappingURL=collapsible.js.map
