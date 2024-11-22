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

const SvgFeatherMap = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 9, x2: 9, y1: 3, y2: 18 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 15, x2: 15, y1: 6, y2: 21 })
);

module.exports = SvgFeatherMap;
//# sourceMappingURL=feather-map.js.map
