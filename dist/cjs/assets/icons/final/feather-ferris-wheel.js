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
const SvgFeatherFerrisWheel = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 2 }),
    React.createElement("path", { d: "M12 2v4" }),
    React.createElement("path", { d: "m6.8 15-3.5 2" }),
    React.createElement("path", { d: "m20.7 7-3.5 2" }),
    React.createElement("path", { d: "M6.8 9 3.3 7" }),
    React.createElement("path", { d: "m20.7 17-3.5-2" }),
    React.createElement("path", { d: "m9 22 3-8 3 8" }),
    React.createElement("path", { d: "M8 22h8" }),
    React.createElement("path", { d: "M18 18.7a9 9 0 1 0-12 0" })));
exports.default = SvgFeatherFerrisWheel;
