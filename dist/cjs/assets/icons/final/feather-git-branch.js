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

const SvgFeatherGitBranch = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("line", { x1: 6, x2: 6, y1: 3, y2: 15 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 18, cy: 6, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 6, cy: 18, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 9a9 9 0 0 1-9 9" })
);

module.exports = SvgFeatherGitBranch;
//# sourceMappingURL=feather-git-branch.js.map
