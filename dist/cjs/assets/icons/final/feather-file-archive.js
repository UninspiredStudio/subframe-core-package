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

const SvgFeatherFileArchive = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2" }),
  /* @__PURE__ */ React__namespace.createElement("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 20, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 7V6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 12v-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 18v-2" })
);

module.exports = SvgFeatherFileArchive;
//# sourceMappingURL=feather-file-archive.js.map
