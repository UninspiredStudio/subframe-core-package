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

const SvgFeatherRefreshCcwDot = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 2v6h6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 22v-6h-6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 1 })
);

module.exports = SvgFeatherRefreshCcwDot;
//# sourceMappingURL=feather-refresh-ccw-dot.js.map
