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

const SvgFeatherTrainFront = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m9 15-1-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m15 15 1-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m8 19-2 3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m16 19 2 3" })
);

module.exports = SvgFeatherTrainFront;
//# sourceMappingURL=feather-train-front.js.map
