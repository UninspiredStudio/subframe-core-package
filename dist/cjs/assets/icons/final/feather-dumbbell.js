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

const SvgFeatherDumbbell = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m6.5 6.5 11 11" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m21 21-1-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 3 1 1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m18 22 4-4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m2 6 4-4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 10 7-7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m14 21 7-7" })
);

module.exports = SvgFeatherDumbbell;
//# sourceMappingURL=feather-dumbbell.js.map
