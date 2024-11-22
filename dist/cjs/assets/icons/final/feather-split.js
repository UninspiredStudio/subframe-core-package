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

const SvgFeatherSplit = (props) => (React__namespace.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React__namespace.createElement("path", { d: "M16 3h5v5" }),
    React__namespace.createElement("path", { d: "M8 3H3v5" }),
    React__namespace.createElement("path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }),
    React__namespace.createElement("path", { d: "m15 9 6-6" })));

module.exports = SvgFeatherSplit;
//# sourceMappingURL=feather-split.js.map
