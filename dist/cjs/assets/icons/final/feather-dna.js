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
const SvgFeatherDna = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M2 15c6.667-6 13.333 0 20-6" }),
    React.createElement("path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }),
    React.createElement("path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }),
    React.createElement("path", { d: "m17 6-2.5-2.5" }),
    React.createElement("path", { d: "m14 8-1-1" }),
    React.createElement("path", { d: "m7 18 2.5 2.5" }),
    React.createElement("path", { d: "m3.5 14.5.5.5" }),
    React.createElement("path", { d: "m20 9 .5.5" }),
    React.createElement("path", { d: "m6.5 12.5 1 1" }),
    React.createElement("path", { d: "m16.5 10.5 1 1" }),
    React.createElement("path", { d: "m10 16 1.5 1.5" })));
exports.default = SvgFeatherDna;
