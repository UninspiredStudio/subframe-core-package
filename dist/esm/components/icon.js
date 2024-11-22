"use strict";
"use client";
import classNames from 'classnames';
import React__default, { lazy, Suspense } from 'react';
import styles from './icon.module.css.js';
import { icons } from '../assets/icons/final/index.js';

const IconFallback = () => /* @__PURE__ */ React__default.createElement("svg", { width: "1em", height: "1em" });
const Icon = React__default.forwardRef(function Icon2(props, ref) {
  const { className, name, ...otherProps } = props;
  if (name === null) {
    return null;
  }
  let children;
  if (name === "empty") {
    children = /* @__PURE__ */ React__default.createElement(IconFallback, null);
  } else {
    const lazyIcon = icons[name];
    if (!lazyIcon) {
      console.warn(`Icon rendered with invalid name: ${name}`);
      return null;
    }
    const Component = lazy(lazyIcon);
    children = /* @__PURE__ */ React__default.createElement(Suspense, { fallback: /* @__PURE__ */ React__default.createElement(IconFallback, null) }, /* @__PURE__ */ React__default.createElement(Component, null));
  }
  return /* @__PURE__ */ React__default.createElement(
    "span",
    {
      className: classNames(className, styles.root),
      ref,
      ...otherProps
    },
    children
  );
});

export { Icon };
//# sourceMappingURL=icon.js.map
