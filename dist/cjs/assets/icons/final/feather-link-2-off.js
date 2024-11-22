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

const SvgFeatherLink2Off = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 17H7A5 5 0 0 1 7 7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15 7h2a5 5 0 0 1 4 8" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 8, x2: 12, y1: 12, y2: 12 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 })
);

module.exports = SvgFeatherLink2Off;
//# sourceMappingURL=feather-link-2-off.js.map
