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

const SvgSubframeSides = (props) => (React__namespace.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React__namespace.createElement("path", { d: "M2 8C2 7.44772 2.44772 7 3 7V7C3.55228 7 4 7.44772 4 8V16C4 16.5523 3.55228 17 3 17V17C2.44772 17 2 16.5523 2 16V8Z", fill: "currentColor" }),
    React__namespace.createElement("path", { d: "M17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21V21C7 20.4477 7.44772 20 8 20H16C16.5523 20 17 20.4477 17 21V21Z", fill: "currentColor" }),
    React__namespace.createElement("path", { d: "M21 7C21.5523 7 22 7.44772 22 8V16C22 16.5523 21.5523 17 21 17V17C20.4477 17 20 16.5523 20 16V8C20 7.44772 20.4477 7 21 7V7Z", fill: "currentColor" }),
    React__namespace.createElement("path", { d: "M16 4C16.5523 4 17 3.55228 17 3V3C17 2.44772 16.5523 2 16 2H8C7.44772 2 7 2.44772 7 3V3C7 3.55228 7.44772 4 8 4H16Z", fill: "currentColor" })));

module.exports = SvgSubframeSides;
//# sourceMappingURL=subframe-sides.js.map
