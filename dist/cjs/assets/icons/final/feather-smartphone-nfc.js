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

const SvgFeatherSmartphoneNfc = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 7, height: 12, x: 2, y: 6, rx: 1 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" })
);

module.exports = SvgFeatherSmartphoneNfc;
//# sourceMappingURL=feather-smartphone-nfc.js.map
