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

const SvgFeatherMails = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 16, height: 13, x: 6, y: 4, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2 8v11c0 1.1.9 2 2 2h14" })
);

module.exports = SvgFeatherMails;
//# sourceMappingURL=feather-mails.js.map
