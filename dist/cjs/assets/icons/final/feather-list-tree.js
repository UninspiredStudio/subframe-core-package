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

const SvgFeatherListTree = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 12h-8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 6H8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 18h-8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 6v4c0 1.1.9 2 2 2h3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 10v6c0 1.1.9 2 2 2h3" })
);

module.exports = SvgFeatherListTree;
//# sourceMappingURL=feather-list-tree.js.map
