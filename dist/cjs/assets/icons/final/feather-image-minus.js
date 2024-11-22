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

const SvgFeatherImageMinus = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 16, x2: 22, y1: 5, y2: 5 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9, cy: 9, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
);

module.exports = SvgFeatherImageMinus;
//# sourceMappingURL=feather-image-minus.js.map
