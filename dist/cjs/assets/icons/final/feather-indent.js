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

const SvgFeatherIndent = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("polyline", { points: "3 8 7 12 3 16" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 21, x2: 11, y1: 12, y2: 12 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 21, x2: 11, y1: 6, y2: 6 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 21, x2: 11, y1: 18, y2: 18 })
);

module.exports = SvgFeatherIndent;
//# sourceMappingURL=feather-indent.js.map
