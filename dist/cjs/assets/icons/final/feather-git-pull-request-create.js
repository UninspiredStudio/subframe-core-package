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

const SvgFeatherGitPullRequestCreate = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 6, cy: 6, r: 3 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 9v12" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M18 15v6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M21 18h-6" })
);

module.exports = SvgFeatherGitPullRequestCreate;
//# sourceMappingURL=feather-git-pull-request-create.js.map
