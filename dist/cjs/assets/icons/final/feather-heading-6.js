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

const SvgFeatherHeading6 = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("path", { d: "M4 12h8" }),
    React__namespace.createElement("path", { d: "M4 18V6" }),
    React__namespace.createElement("path", { d: "M12 18V6" }),
    React__namespace.createElement("circle", { cx: 19, cy: 16, r: 2 }),
    React__namespace.createElement("path", { d: "M20 10c-2 2-3 3.5-3 6" })));

module.exports = SvgFeatherHeading6;
//# sourceMappingURL=feather-heading-6.js.map
