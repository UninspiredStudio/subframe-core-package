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

const SvgFeatherShipWheel = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 8 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 2v7.5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m19 5-5.23 5.23" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 12h-7.5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m19 19-5.23-5.23" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 14.5V22" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.23 13.77 5 19" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.5 12H2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.23 10.23 5 5" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2.5 })
);

module.exports = SvgFeatherShipWheel;
//# sourceMappingURL=feather-ship-wheel.js.map
