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

const SvgFeatherCaravan = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 4, height: 4, x: 2, y: 9 }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 4, height: 10, x: 10, y: 9 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 8, cy: 19, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 19h12v-2" })
);

module.exports = SvgFeatherCaravan;
//# sourceMappingURL=feather-caravan.js.map
