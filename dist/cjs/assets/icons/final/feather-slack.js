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
const SvgFeatherSlack = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("rect", { width: 3, height: 8, x: 13, y: 2, rx: 1.5 }),
    React.createElement("path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }),
    React.createElement("rect", { width: 3, height: 8, x: 8, y: 14, rx: 1.5 }),
    React.createElement("path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }),
    React.createElement("rect", { width: 8, height: 3, x: 14, y: 13, rx: 1.5 }),
    React.createElement("path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }),
    React.createElement("rect", { width: 8, height: 3, x: 2, y: 8, rx: 1.5 }),
    React.createElement("path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" })));
exports.default = SvgFeatherSlack;
