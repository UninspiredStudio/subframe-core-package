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

const SvgFeatherDraftingCompass = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 5, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 21 8.02-14.26" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.99 6.74 1.93 3.44" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M19 12c-3.87 4-10.13 4-14 0" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m21 21-2.16-3.84" })
);

module.exports = SvgFeatherDraftingCompass;
//# sourceMappingURL=feather-drafting-compass.js.map
