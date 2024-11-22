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

const SvgFeatherFileAudio2 = (props) => /* @__PURE__ */ React__namespace.createElement(
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
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2" }),
  /* @__PURE__ */ React__namespace.createElement("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ React__namespace.createElement("path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9, cy: 17, r: 1 }),
  /* @__PURE__ */ React__namespace.createElement("circle", { cx: 3, cy: 17, r: 1 })
);

module.exports = SvgFeatherFileAudio2;
//# sourceMappingURL=feather-file-audio-2.js.map
