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

const SvgFeatherWallet = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" })
);

module.exports = SvgFeatherWallet;
//# sourceMappingURL=feather-wallet.js.map