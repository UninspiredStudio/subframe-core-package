"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var icon_module = require('./icon.module.css.js');
var loadIcon = require('../lib/load-icon.js');

const IconFallback = () => /* @__PURE__ */ React.createElement("svg", { width: "1em", height: "1em" });
const Icon = React.forwardRef(function Icon2(props, ref) {
  const [icon, setIcon] = React.useState(/* @__PURE__ */ React.createElement(IconFallback, null));
  const { className, name, ...otherProps } = props;
  async function getChildren(name2) {
    if (name2 === "empty") {
      return /* @__PURE__ */ React.createElement(IconFallback, null);
    } else if (name2 === null) {
      return null;
    } else {
      const Component = await loadIcon.loadIcon(name2);
      if (!Component) {
        console.warn(`Icon rendered with invalid name: ${String(name2)}`);
        return null;
      }
      return /* @__PURE__ */ React.createElement(Component, null);
    }
  }
  React.useEffect(() => {
    if (name) {
      getChildren(name).then((children) => setIcon(children));
    }
  }, [name]);
  return name === null ? null : /* @__PURE__ */ React.createElement(
    "span",
    {
      className: classNames(className, icon_module.root),
      ref,
      ...otherProps
    },
    icon
  );
});

exports.Icon = Icon;
//# sourceMappingURL=icon.js.map
