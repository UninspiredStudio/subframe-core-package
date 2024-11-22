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

const SvgFeatherCurrency = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 8 }),
    React__namespace.createElement("line", { x1: 3, x2: 6, y1: 3, y2: 6 }),
    React__namespace.createElement("line", { x1: 21, x2: 18, y1: 3, y2: 6 }),
    React__namespace.createElement("line", { x1: 3, x2: 6, y1: 21, y2: 18 }),
    React__namespace.createElement("line", { x1: 21, x2: 18, y1: 21, y2: 18 })));

module.exports = SvgFeatherCurrency;
//# sourceMappingURL=feather-currency.js.map
