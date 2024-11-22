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

const SvgFeatherFlipHorizontal2 = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 7 5 5-5 5V7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m21 7-5 5 5 5V7" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 20v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 14v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 8v2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 2v2" })
);

module.exports = SvgFeatherFlipHorizontal2;
//# sourceMappingURL=feather-flip-horizontal-2.js.map
