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

const SvgFeatherEqualNot = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("line", { x1: 5, x2: 19, y1: 9, y2: 9 }),
    React__namespace.createElement("line", { x1: 5, x2: 19, y1: 15, y2: 15 }),
    React__namespace.createElement("line", { x1: 19, x2: 5, y1: 5, y2: 19 })));

module.exports = SvgFeatherEqualNot;
//# sourceMappingURL=feather-equal-not.js.map
