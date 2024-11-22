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

const SvgFeatherParkingCircleOff = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m5 5 14 14" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 17v-2.34" })
);

module.exports = SvgFeatherParkingCircleOff;
//# sourceMappingURL=feather-parking-circle-off.js.map
