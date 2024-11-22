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

const SvgFeatherSignpostBig = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 9H4L2 7l2-2h6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14 5h6l2 2-2 2h-6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 22h8" })
);

module.exports = SvgFeatherSignpostBig;
//# sourceMappingURL=feather-signpost-big.js.map
