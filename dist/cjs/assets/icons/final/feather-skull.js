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

const SvgFeatherSkull = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9, cy: 12, r: 1 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 15, cy: 12, r: 1 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 20v2h8v-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.5 17-.5-1-.5 1h1z" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" })
);

module.exports = SvgFeatherSkull;
//# sourceMappingURL=feather-skull.js.map