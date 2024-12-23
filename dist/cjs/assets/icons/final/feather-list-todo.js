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

const SvgFeatherListTodo = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("rect", { x: 3, y: 5, width: 6, height: 6, rx: 1 }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "m3 17 2 2 4-4" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M13 6h8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M13 12h8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M13 18h8" })
);

module.exports = SvgFeatherListTodo;
//# sourceMappingURL=feather-list-todo.js.map
