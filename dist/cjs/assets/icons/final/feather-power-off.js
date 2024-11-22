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

const SvgFeatherPowerOff = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 2v4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m2 2 20 20" })
);

module.exports = SvgFeatherPowerOff;
//# sourceMappingURL=feather-power-off.js.map
