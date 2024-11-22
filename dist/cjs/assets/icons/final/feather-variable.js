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

const SvgFeatherVariable = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 21s-4-3-4-9 4-9 4-9" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 3s4 3 4 9-4 9-4 9" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 15, x2: 9, y1: 9, y2: 15 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 9, x2: 15, y1: 9, y2: 15 })
);

module.exports = SvgFeatherVariable;
//# sourceMappingURL=feather-variable.js.map