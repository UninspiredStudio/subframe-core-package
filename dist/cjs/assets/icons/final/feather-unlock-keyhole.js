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

const SvgFeatherUnlockKeyhole = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 16, r: 1 }),
  /* @__PURE__ */ React__namespace.createElement("rect", { x: 3, y: 10, width: 18, height: 12, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" })
);

module.exports = SvgFeatherUnlockKeyhole;
//# sourceMappingURL=feather-unlock-keyhole.js.map
