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

const SvgFeatherShare2 = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 18, cy: 5, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 6, cy: 12, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 18, cy: 19, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 8.59, x2: 15.42, y1: 13.51, y2: 17.49 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 15.41, x2: 8.59, y1: 6.51, y2: 10.49 })
);

module.exports = SvgFeatherShare2;
//# sourceMappingURL=feather-share-2.js.map