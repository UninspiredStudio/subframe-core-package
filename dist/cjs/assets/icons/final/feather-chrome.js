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

const SvgFeatherChrome = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 4 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 21.17, x2: 12, y1: 8, y2: 8 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 3.95, x2: 8.54, y1: 6.06, y2: 14 }),
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 10.88, x2: 15.46, y1: 21.94, y2: 14 })
);

module.exports = SvgFeatherChrome;
//# sourceMappingURL=feather-chrome.js.map
