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

const SvgFeatherPointer = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 14a8 8 0 0 1-8 8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" })
);

module.exports = SvgFeatherPointer;
//# sourceMappingURL=feather-pointer.js.map
