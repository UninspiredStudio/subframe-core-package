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

const SvgFeatherSortDesc = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M11 5h10" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M11 9h7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M11 13h4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 17 3 3 3-3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 18V4" })
);

module.exports = SvgFeatherSortDesc;
//# sourceMappingURL=feather-sort-desc.js.map
