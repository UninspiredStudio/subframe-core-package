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

const SvgFeatherFileScan = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5" }),
  /* @__PURE__ */ React__namespace.createElement("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 22a2 2 0 0 1-2-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 22a2 2 0 0 0 2-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 14a2 2 0 0 1 2 2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 14a2 2 0 0 0-2 2" })
);

module.exports = SvgFeatherFileScan;
//# sourceMappingURL=feather-file-scan.js.map