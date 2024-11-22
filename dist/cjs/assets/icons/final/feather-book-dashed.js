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
const SvgFeatherBookDashed = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M20 22h-2" }),
    React.createElement("path", { d: "M20 15v2h-2" }),
    React.createElement("path", { d: "M4 19.5V15" }),
    React.createElement("path", { d: "M20 8v3" }),
    React.createElement("path", { d: "M18 2h2v2" }),
    React.createElement("path", { d: "M4 11V9" }),
    React.createElement("path", { d: "M12 2h2" }),
    React.createElement("path", { d: "M12 22h2" }),
    React.createElement("path", { d: "M12 17h2" }),
    React.createElement("path", { d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8" }),
    React.createElement("path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" })));
exports.default = SvgFeatherBookDashed;
