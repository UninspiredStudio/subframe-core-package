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

const SvgFeatherFilm = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M7 3v18" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 7.5h4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 12h18" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M3 16.5h4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 3v18" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 7.5h4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M17 16.5h4" })
);

module.exports = SvgFeatherFilm;
//# sourceMappingURL=feather-film.js.map
