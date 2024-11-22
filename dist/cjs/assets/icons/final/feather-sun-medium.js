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

const SvgFeatherSunMedium = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 4 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 3v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 20v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 12h1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 12h1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m18.364 5.636-.707.707" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m6.343 17.657-.707.707" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m5.636 5.636.707.707" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m17.657 17.657.707.707" })
);

module.exports = SvgFeatherSunMedium;
//# sourceMappingURL=feather-sun-medium.js.map
