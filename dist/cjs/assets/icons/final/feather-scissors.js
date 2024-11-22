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

const SvgFeatherScissors = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 6, cy: 6, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.12 8.12 12 12" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 4 8.12 15.88" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 6, cy: 18, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.8 14.8 20 20" })
);

module.exports = SvgFeatherScissors;
//# sourceMappingURL=feather-scissors.js.map