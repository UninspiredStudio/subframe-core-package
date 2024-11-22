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

const SvgFeatherRadius = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 19, cy: 19, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m13.41 13.41 4.18 4.18" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2 })
);

module.exports = SvgFeatherRadius;
//# sourceMappingURL=feather-radius.js.map