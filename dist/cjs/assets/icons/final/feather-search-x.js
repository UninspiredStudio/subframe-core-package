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

const SvgFeatherSearchX = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m13.5 8.5-5 5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m8.5 8.5 5 5" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 11, cy: 11, r: 8 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m21 21-4.3-4.3" })
);

module.exports = SvgFeatherSearchX;
//# sourceMappingURL=feather-search-x.js.map