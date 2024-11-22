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

const SvgFeatherBookKey = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 14, cy: 8, r: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m20 2-4.5 4.5" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m19 3 1 1" })
);

module.exports = SvgFeatherBookKey;
//# sourceMappingURL=feather-book-key.js.map