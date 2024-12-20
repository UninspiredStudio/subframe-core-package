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

const SvgFeatherAlignVerticalDistributeCenter = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 14, height: 6, x: 5, y: 14, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 6, x: 7, y: 4, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 7h-5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 7H1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 17h-3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M5 17H2" })
);

module.exports = SvgFeatherAlignVerticalDistributeCenter;
//# sourceMappingURL=feather-align-vertical-distribute-center.js.map
