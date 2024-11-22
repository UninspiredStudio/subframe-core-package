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

const SvgFeatherSlack = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 3, height: 8, x: 13, y: 2, rx: 1.5 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 3, height: 8, x: 8, y: 14, rx: 1.5 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 3, x: 14, y: 13, rx: 1.5 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 3, x: 2, y: 8, rx: 1.5 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" })
);

module.exports = SvgFeatherSlack;
//# sourceMappingURL=feather-slack.js.map