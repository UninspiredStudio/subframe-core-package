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

const SvgFeatherPoundSterling = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 7c0-5.333-8-5.333-8 0" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 7v14" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 21h12" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 13h10" })
);

module.exports = SvgFeatherPoundSterling;
//# sourceMappingURL=feather-pound-sterling.js.map
