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

const SvgFeatherCloudDrizzle = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 19v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M8 14v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 19v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M16 14v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 21v1" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M12 16v1" })
);

module.exports = SvgFeatherCloudDrizzle;
//# sourceMappingURL=feather-cloud-drizzle.js.map