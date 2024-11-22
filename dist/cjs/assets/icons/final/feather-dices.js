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

const SvgFeatherDices = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 12, height: 12, x: 2, y: 10, rx: 2, ry: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 18h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 14h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15 6h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 9h.01" })
);

module.exports = SvgFeatherDices;
//# sourceMappingURL=feather-dices.js.map