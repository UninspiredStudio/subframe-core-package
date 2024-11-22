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

const SvgFeatherHeading2 = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" })
);

module.exports = SvgFeatherHeading2;
//# sourceMappingURL=feather-heading-2.js.map
