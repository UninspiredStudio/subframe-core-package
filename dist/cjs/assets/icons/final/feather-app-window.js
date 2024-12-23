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

const SvgFeatherAppWindow = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { x: 2, y: 4, width: 20, height: 16, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 4v4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2 8h20" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 4v4" })
);

module.exports = SvgFeatherAppWindow;
//# sourceMappingURL=feather-app-window.js.map
