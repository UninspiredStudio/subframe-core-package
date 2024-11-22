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

const SvgFeatherTractor = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 4h9l1 7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 11V4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 10V4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 5c-.6 0-1 .4-1 1v5.6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7, cy: 15, r: 0.5 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7, cy: 15, r: 5 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 18h-5" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 18, cy: 18, r: 2 })
);

module.exports = SvgFeatherTractor;
//# sourceMappingURL=feather-tractor.js.map