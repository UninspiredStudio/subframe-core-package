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

const SvgFeatherIceCream = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 7A5 5 0 0 0 7 7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" })
);

module.exports = SvgFeatherIceCream;
//# sourceMappingURL=feather-ice-cream.js.map
