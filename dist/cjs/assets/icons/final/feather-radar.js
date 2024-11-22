"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const SvgFeatherRadar = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }),
    React.createElement("path", { d: "M4 6h.01" }),
    React.createElement("path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }),
    React.createElement("path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }),
    React.createElement("path", { d: "M12 18h.01" }),
    React.createElement("path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }),
    React.createElement("circle", { cx: 12, cy: 12, r: 2 }),
    React.createElement("path", { d: "m13.41 10.59 5.66-5.66" })));
exports.default = SvgFeatherRadar;
