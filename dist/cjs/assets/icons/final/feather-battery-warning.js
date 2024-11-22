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

const SvgFeatherBatteryWarning = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 22, x2: 22, y1: 11, y2: 13 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10, x2: 10, y1: 7, y2: 13 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10, x2: 10, y1: 17, y2: 17.01 })
);

module.exports = SvgFeatherBatteryWarning;
//# sourceMappingURL=feather-battery-warning.js.map