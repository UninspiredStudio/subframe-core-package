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

const SvgFeatherMonitorDown = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 13V7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m15 10-3 3-3-3" }),
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 20, height: 14, x: 2, y: 3, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 17v4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 21h8" })
);

module.exports = SvgFeatherMonitorDown;
//# sourceMappingURL=feather-monitor-down.js.map