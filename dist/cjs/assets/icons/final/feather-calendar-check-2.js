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

const SvgFeatherCalendarCheck2 = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 16, x2: 16, y1: 2, y2: 6 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 8, x2: 8, y1: 2, y2: 6 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 3, x2: 21, y1: 10, y2: 10 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m16 20 2 2 4-4" })
);

module.exports = SvgFeatherCalendarCheck2;
//# sourceMappingURL=feather-calendar-check-2.js.map
