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

const SvgFeatherRouteOff = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 6, cy: 19, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m2 2 20 20" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15 5h-4.3" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 18, cy: 5, r: 3 })
);

module.exports = SvgFeatherRouteOff;
//# sourceMappingURL=feather-route-off.js.map
