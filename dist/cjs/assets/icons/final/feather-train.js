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

const SvgFeatherTrain = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { x: 4, y: 3, width: 16, height: 16, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 11h16" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 3v8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m8 19-2 3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m18 22-2-3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 15h0" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 15h0" })
);

module.exports = SvgFeatherTrain;
//# sourceMappingURL=feather-train.js.map