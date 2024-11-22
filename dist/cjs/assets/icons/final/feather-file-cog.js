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
const SvgFeatherFileCog = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: 6, cy: 13, r: 3 }),
    React.createElement("path", { d: "m9.7 14.4-.9-.3" }),
    React.createElement("path", { d: "m3.2 11.9-.9-.3" }),
    React.createElement("path", { d: "m4.6 16.7.3-.9" }),
    React.createElement("path", { d: "m7.6 16.7-.4-1" }),
    React.createElement("path", { d: "m4.8 10.3-.4-1" }),
    React.createElement("path", { d: "m2.3 14.6 1-.4" }),
    React.createElement("path", { d: "m8.7 11.8 1-.4" }),
    React.createElement("path", { d: "m7.4 9.3-.3.9" }),
    React.createElement("path", { d: "M14 2v6h6" }),
    React.createElement("path", { d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5" })));
exports.default = SvgFeatherFileCog;
