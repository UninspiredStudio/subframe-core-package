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

const SvgFeatherMaximize = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" })
);

module.exports = SvgFeatherMaximize;
//# sourceMappingURL=feather-maximize.js.map
