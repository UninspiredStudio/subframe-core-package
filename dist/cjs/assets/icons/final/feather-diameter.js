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

const SvgFeatherDiameter = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 19, cy: 19, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 5, cy: 5, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m6.41 6.41 11.18 11.18" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" })
);

module.exports = SvgFeatherDiameter;
//# sourceMappingURL=feather-diameter.js.map
