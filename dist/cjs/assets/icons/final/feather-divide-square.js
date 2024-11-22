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

const SvgFeatherDivideSquare = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
    React__namespace.createElement("line", { x1: 8, x2: 16, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 16, y2: 16 }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 8, y2: 8 })));

module.exports = SvgFeatherDivideSquare;
//# sourceMappingURL=feather-divide-square.js.map
