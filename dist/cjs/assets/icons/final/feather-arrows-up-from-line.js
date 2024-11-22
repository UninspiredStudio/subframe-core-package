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

const SvgFeatherArrowsUpFromLine = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("path", { d: "m4 6 3-3 3 3" }),
    React__namespace.createElement("path", { d: "M7 17V3" }),
    React__namespace.createElement("path", { d: "m14 6 3-3 3 3" }),
    React__namespace.createElement("path", { d: "M17 17V3" }),
    React__namespace.createElement("path", { d: "M4 21h16" })));

module.exports = SvgFeatherArrowsUpFromLine;
//# sourceMappingURL=feather-arrows-up-from-line.js.map
