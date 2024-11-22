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

const SvgFeatherArchiveRestore = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 20, height: 5, x: 2, y: 3, rx: 1 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m9 15 3-3 3 3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 12v9" })
);

module.exports = SvgFeatherArchiveRestore;
//# sourceMappingURL=feather-archive-restore.js.map