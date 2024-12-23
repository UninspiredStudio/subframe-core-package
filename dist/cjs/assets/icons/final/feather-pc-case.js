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

const SvgFeatherPcCase = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 14, height: 20, x: 5, y: 2, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15 14h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 6h6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 10h6" })
);

module.exports = SvgFeatherPcCase;
//# sourceMappingURL=feather-pc-case.js.map
