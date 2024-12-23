"use strict";
'use strict';

var React = require('react');

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

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SvgFeatherArrowDown10 = (props) => /* @__PURE__ */ React__namespace.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 16 4 4 4-4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 20V4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 10V4h-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15 10h4" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { x: 15, y: 14, width: 4, height: 6, ry: 2 })
);

module.exports = SvgFeatherArrowDown10;
//# sourceMappingURL=feather-arrow-down-1-0.js.map
