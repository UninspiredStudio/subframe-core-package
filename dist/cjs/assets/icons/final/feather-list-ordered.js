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

const SvgFeatherListOrdered = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10, x2: 21, y1: 6, y2: 6 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10, x2: 21, y1: 12, y2: 12 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10, x2: 21, y1: 18, y2: 18 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 6h1v4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 10h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" })
);

module.exports = SvgFeatherListOrdered;
//# sourceMappingURL=feather-list-ordered.js.map
