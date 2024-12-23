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

const SvgFeatherScale3D = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M5 7v12h12" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m5 19 6-6" })
);

module.exports = SvgFeatherScale3D;
//# sourceMappingURL=feather-scale-3d.js.map
