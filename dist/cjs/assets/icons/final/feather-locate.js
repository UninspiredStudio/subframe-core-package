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

const SvgFeatherLocate = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 2, x2: 5, y1: 12, y2: 12 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 19, x2: 22, y1: 12, y2: 12 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 12, x2: 12, y1: 2, y2: 5 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 12, x2: 12, y1: 19, y2: 22 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 7 })
);

module.exports = SvgFeatherLocate;
//# sourceMappingURL=feather-locate.js.map
