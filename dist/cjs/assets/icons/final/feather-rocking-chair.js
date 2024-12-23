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

const SvgFeatherRockingChair = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("polyline", { points: "3.5 2 6.5 12.5 18 12.5" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 9.5, x2: 5.5, y1: 12.5, y2: 20 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 15, x2: 18.5, y1: 12.5, y2: 20 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.75 18a13 13 0 0 0 18.5 0" })
);

module.exports = SvgFeatherRockingChair;
//# sourceMappingURL=feather-rocking-chair.js.map
