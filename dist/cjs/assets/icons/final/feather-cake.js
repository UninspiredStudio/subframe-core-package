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

const SvgFeatherCake = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2 21h20" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 8v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 8v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 8v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 4h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 4h.01" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 4h.01" })
);

module.exports = SvgFeatherCake;
//# sourceMappingURL=feather-cake.js.map
