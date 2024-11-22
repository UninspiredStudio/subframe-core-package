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

const SvgFeatherRadio = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" })
);

module.exports = SvgFeatherRadio;
//# sourceMappingURL=feather-radio.js.map
