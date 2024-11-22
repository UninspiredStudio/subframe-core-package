"use strict";
"use client";
import classNames from 'classnames';
import React__default, { useState, useEffect } from 'react';
import styles from './icon.module.css.js';
import { loadIcon } from '../lib/load-icon.js';

const IconFallback = () => /* @__PURE__ */ React__default.createElement("svg", { width: "1em", height: "1em" });
const Icon = React__default.forwardRef(function Icon2(props, ref) {
  const [icon, setIcon] = useState(/* @__PURE__ */ React__default.createElement(IconFallback, null));
  const { className, name, ...otherProps } = props;
  async function getChildren(name2) {
    if (name2 === "empty") {
      return /* @__PURE__ */ React__default.createElement(IconFallback, null);
    } else if (name2 === null) {
      return null;
    } else {
      const Component = await loadIcon(name2);
      if (!Component) {
        console.warn(`Icon rendered with invalid name: ${String(name2)}`);
        return null;
      }
      return /* @__PURE__ */ React__default.createElement(Component, null);
    }
  }
  useEffect(() => {
    if (name) {
      getChildren(name).then((children) => setIcon(children));
    }
  }, [name]);
  return name === null ? null : /* @__PURE__ */ React__default.createElement(
    "span",
    {
      className: classNames(className, styles.root),
      ref,
      ...otherProps
    },
    icon
  );
});

export { Icon };
//# sourceMappingURL=icon.js.map
