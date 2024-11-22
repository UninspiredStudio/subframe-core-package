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

const SvgFeatherPercentSquare = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
    React__namespace.createElement("path", { d: "m15 9-6 6" }),
    React__namespace.createElement("path", { d: "M9 9h.01" }),
    React__namespace.createElement("path", { d: "M15 15h.01" })));

module.exports = SvgFeatherPercentSquare;
//# sourceMappingURL=feather-percent-square.js.map
