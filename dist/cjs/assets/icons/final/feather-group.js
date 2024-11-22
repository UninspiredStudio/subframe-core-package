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

const SvgFeatherGroup = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 7, height: 5, x: 7, y: 7, rx: 1 }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 7, height: 5, x: 10, y: 12, rx: 1 })
);

module.exports = SvgFeatherGroup;
//# sourceMappingURL=feather-group.js.map