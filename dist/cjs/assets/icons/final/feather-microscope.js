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

const SvgFeatherMicroscope = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M6 18h8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 22h18" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M14 22a7 7 0 1 0 0-14h-1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 14h2" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" })
);

module.exports = SvgFeatherMicroscope;
//# sourceMappingURL=feather-microscope.js.map
