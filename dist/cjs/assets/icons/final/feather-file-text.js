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

const SvgFeatherFileText = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ React__namespace.createElement("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 16, x2: 8, y1: 13, y2: 13 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 16, x2: 8, y1: 17, y2: 17 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10, x2: 8, y1: 9, y2: 9 })
);

module.exports = SvgFeatherFileText;
//# sourceMappingURL=feather-file-text.js.map
