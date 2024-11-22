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
const SvgFeatherUserCog = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: 18, cy: 15, r: 3 }),
    React.createElement("circle", { cx: 9, cy: 7, r: 4 }),
    React.createElement("path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }),
    React.createElement("path", { d: "m21.7 16.4-.9-.3" }),
    React.createElement("path", { d: "m15.2 13.9-.9-.3" }),
    React.createElement("path", { d: "m16.6 18.7.3-.9" }),
    React.createElement("path", { d: "m19.1 12.2.3-.9" }),
    React.createElement("path", { d: "m19.6 18.7-.4-1" }),
    React.createElement("path", { d: "m16.8 12.3-.4-1" }),
    React.createElement("path", { d: "m14.3 16.6 1-.4" }),
    React.createElement("path", { d: "m20.7 13.8 1-.4" })));
exports.default = SvgFeatherUserCog;
