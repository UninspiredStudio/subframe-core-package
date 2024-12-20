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

const SvgFeatherUsb = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 7, r: 1 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 20, r: 1 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.7 19.3 19 5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m21 3-3 1 2 2Z" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.26 7.68 5 12l2 5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m10 14 5 2 3.5-3.5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m18 12 1-1 1 1-1 1Z" })
);

module.exports = SvgFeatherUsb;
//# sourceMappingURL=feather-usb.js.map
