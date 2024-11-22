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

const SvgFeatherWholeWord = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7, cy: 12, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M10 9v6" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 17, cy: 12, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14 7v8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" })
);

module.exports = SvgFeatherWholeWord;
//# sourceMappingURL=feather-whole-word.js.map