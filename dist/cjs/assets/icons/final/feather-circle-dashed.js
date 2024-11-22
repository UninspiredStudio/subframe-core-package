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
const SvgFeatherCircleDashed = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }),
    React.createElement("path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }),
    React.createElement("path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }),
    React.createElement("path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }),
    React.createElement("path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }),
    React.createElement("path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }),
    React.createElement("path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }),
    React.createElement("path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" })));
exports.default = SvgFeatherCircleDashed;
