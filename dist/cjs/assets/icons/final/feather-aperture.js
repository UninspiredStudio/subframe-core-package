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
const SvgFeatherAperture = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React.createElement("line", { x1: 14.31, x2: 20.05, y1: 8, y2: 17.94 }),
    React.createElement("line", { x1: 9.69, x2: 21.17, y1: 8, y2: 8 }),
    React.createElement("line", { x1: 7.38, x2: 13.12, y1: 12, y2: 2.06 }),
    React.createElement("line", { x1: 9.69, x2: 3.95, y1: 16, y2: 6.06 }),
    React.createElement("line", { x1: 14.31, x2: 2.83, y1: 16, y2: 16 }),
    React.createElement("line", { x1: 16.62, x2: 10.88, y1: 12, y2: 21.94 })));
exports.default = SvgFeatherAperture;
