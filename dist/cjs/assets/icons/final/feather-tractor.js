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
const SvgFeatherTractor = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M3 4h9l1 7" }),
    React.createElement("path", { d: "M4 11V4" }),
    React.createElement("path", { d: "M8 10V4" }),
    React.createElement("path", { d: "M18 5c-.6 0-1 .4-1 1v5.6" }),
    React.createElement("path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" }),
    React.createElement("circle", { cx: 7, cy: 15, r: 0.5 }),
    React.createElement("circle", { cx: 7, cy: 15, r: 5 }),
    React.createElement("path", { d: "M16 18h-5" }),
    React.createElement("circle", { cx: 18, cy: 18, r: 2 })));
exports.default = SvgFeatherTractor;
