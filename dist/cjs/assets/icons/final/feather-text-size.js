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

const SvgFeatherTextSize = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.98117 18.2918L3.51808 14.1763M11.9812 18.2918L10.4528 14.1763M3.51808 14.1763L6.57301 5.99591C6.57301 5.99591 6.6241 5.70817 6.99082 5.70817C7.35754 5.70817 7.41485 5.9959 7.41485 5.9959L10.4528 14.1763M3.51808 14.1763H10.4528" }),
  /* @__PURE__ */ React__namespace.createElement(
    "path",
    {
      d: "M15.0188 18.2918L15.9836 15.7083M22.0188 18.2918L21.0594 15.7083M15.9836 15.7083L16.0947 15.411L18.2331 9.68468C18.2331 9.68468 18.2689 9.48326 18.5256 9.48326C18.7823 9.48326 18.8224 9.68467 18.8224 9.68467L20.949 15.411L21.0594 15.7083M15.9836 15.7083H21.0594",
      strokeWidth: 1.75
    }
  )
);

module.exports = SvgFeatherTextSize;
//# sourceMappingURL=feather-text-size.js.map