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

const SvgFeatherBarChartHorizontalBig = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 3v18h18" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 12, height: 4, x: 7, y: 5, rx: 1 }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 7, height: 4, x: 7, y: 13, rx: 1 })
);

module.exports = SvgFeatherBarChartHorizontalBig;
//# sourceMappingURL=feather-bar-chart-horizontal-big.js.map