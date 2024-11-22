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
const SvgFeatherCpu = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("rect", { x: 4, y: 4, width: 16, height: 16, rx: 2 }),
    React.createElement("rect", { x: 9, y: 9, width: 6, height: 6 }),
    React.createElement("path", { d: "M15 2v2" }),
    React.createElement("path", { d: "M15 20v2" }),
    React.createElement("path", { d: "M2 15h2" }),
    React.createElement("path", { d: "M2 9h2" }),
    React.createElement("path", { d: "M20 15h2" }),
    React.createElement("path", { d: "M20 9h2" }),
    React.createElement("path", { d: "M9 2v2" }),
    React.createElement("path", { d: "M9 20v2" })));
exports.default = SvgFeatherCpu;
