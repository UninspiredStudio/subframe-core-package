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

const SvgFeatherGitBranchPlus = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 3v12" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M15 6a9 9 0 0 0-9 9" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 15v6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 18h-6" })
);

module.exports = SvgFeatherGitBranchPlus;
//# sourceMappingURL=feather-git-branch-plus.js.map
