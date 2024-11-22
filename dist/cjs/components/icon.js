"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var icon_module = require('./icon.module.css.js');
var index = require('../assets/icons/final/index.js');

const IconFallback = () => /* @__PURE__ */ React.createElement("svg", { width: "1em", height: "1em" });
const Icon = React.forwardRef(function Icon2(props, ref) {
  const { className, name, ...otherProps } = props;
  if (name === null) {
    return null;
  }
  let children;
  if (name === "empty") {
    children = /* @__PURE__ */ React.createElement(IconFallback, null);
  } else {
    const lazyIcon = index.icons[name];
    if (!lazyIcon) {
      console.warn(`Icon rendered with invalid name: ${name}`);
      return null;
    }
    const Component = React.lazy(lazyIcon);
    children = /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(IconFallback, null) }, /* @__PURE__ */ React.createElement(Component, null));
  }
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: classNames(className, icon_module.root),
      ref,
      ...otherProps
    },
    children
  );
});

exports.Icon = Icon;
//# sourceMappingURL=icon.js.map
