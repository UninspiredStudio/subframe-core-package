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

const SvgFeatherPilcrowSquare = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
    React__namespace.createElement("path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }),
    React__namespace.createElement("path", { d: "M12 7v10" }),
    React__namespace.createElement("path", { d: "M16 7v10" })));

module.exports = SvgFeatherPilcrowSquare;
//# sourceMappingURL=feather-pilcrow-square.js.map
