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

const SvgFeatherSunrise = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 2v8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m4.93 10.93 1.41 1.41" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2 18h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 18h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m19.07 10.93-1.41 1.41" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 22H2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m8 6 4-4 4 4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 18a4 4 0 0 0-8 0" })
);

module.exports = SvgFeatherSunrise;
//# sourceMappingURL=feather-sunrise.js.map