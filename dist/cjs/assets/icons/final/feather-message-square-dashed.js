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

const SvgFeatherMessageSquareDashed = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 6V5c0-1.1.9-2 2-2h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M11 3h3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 3h1c1.1 0 2 .9 2 2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 9v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 15c0 1.1-.9 2-2 2h-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14 17h-3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m7 17-4 4v-5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 12v-2" })
);

module.exports = SvgFeatherMessageSquareDashed;
//# sourceMappingURL=feather-message-square-dashed.js.map
