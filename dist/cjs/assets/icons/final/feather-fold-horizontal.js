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

const SvgFeatherFoldHorizontal = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2 12h6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M22 12h-6" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 2v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 8v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 14v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 20v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m19 9-3 3 3 3" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m5 15 3-3-3-3" })
);

module.exports = SvgFeatherFoldHorizontal;
//# sourceMappingURL=feather-fold-horizontal.js.map
