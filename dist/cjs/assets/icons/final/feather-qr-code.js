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
const SvgFeatherQrCode = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("rect", { width: 5, height: 5, x: 3, y: 3, rx: 1 }),
    React.createElement("rect", { width: 5, height: 5, x: 16, y: 3, rx: 1 }),
    React.createElement("rect", { width: 5, height: 5, x: 3, y: 16, rx: 1 }),
    React.createElement("path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }),
    React.createElement("path", { d: "M21 21v.01" }),
    React.createElement("path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }),
    React.createElement("path", { d: "M3 12h.01" }),
    React.createElement("path", { d: "M12 3h.01" }),
    React.createElement("path", { d: "M12 16v.01" }),
    React.createElement("path", { d: "M16 12h1" }),
    React.createElement("path", { d: "M21 12v.01" }),
    React.createElement("path", { d: "M12 21v-1" })));
exports.default = SvgFeatherQrCode;
