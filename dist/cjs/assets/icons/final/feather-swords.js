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
const SvgFeatherSwords = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }),
    React.createElement("line", { x1: 13, x2: 19, y1: 19, y2: 13 }),
    React.createElement("line", { x1: 16, x2: 20, y1: 16, y2: 20 }),
    React.createElement("line", { x1: 19, x2: 21, y1: 21, y2: 19 }),
    React.createElement("polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }),
    React.createElement("line", { x1: 5, x2: 9, y1: 14, y2: 18 }),
    React.createElement("line", { x1: 7, x2: 4, y1: 17, y2: 20 }),
    React.createElement("line", { x1: 3, x2: 5, y1: 19, y2: 21 })));
exports.default = SvgFeatherSwords;
