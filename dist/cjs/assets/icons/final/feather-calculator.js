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

const SvgFeatherCalculator = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 16, height: 20, x: 4, y: 2, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 8, x2: 16, y1: 6, y2: 6 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 16, x2: 16, y1: 14, y2: 18 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 10h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 10h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 10h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 14h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 14h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 18h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 18h.01" })
);

module.exports = SvgFeatherCalculator;
//# sourceMappingURL=feather-calculator.js.map