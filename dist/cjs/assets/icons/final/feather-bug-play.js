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
const SvgFeatherBugPlay = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "m8 2 1.88 1.88" }),
    React.createElement("path", { d: "M14.12 3.88 16 2" }),
    React.createElement("path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
    React.createElement("path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" }),
    React.createElement("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }),
    React.createElement("path", { d: "M6 13H2" }),
    React.createElement("path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }),
    React.createElement("path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }),
    React.createElement("path", { d: "m12 12 8 5-8 5Z" })));
exports.default = SvgFeatherBugPlay;