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
const SvgFeatherKanbanSquareDashed = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M8 7v7" }),
    React.createElement("path", { d: "M12 7v4" }),
    React.createElement("path", { d: "M16 7v9" }),
    React.createElement("path", { d: "M5 3a2 2 0 0 0-2 2" }),
    React.createElement("path", { d: "M9 3h1" }),
    React.createElement("path", { d: "M14 3h1" }),
    React.createElement("path", { d: "M19 3a2 2 0 0 1 2 2" }),
    React.createElement("path", { d: "M21 9v1" }),
    React.createElement("path", { d: "M21 14v1" }),
    React.createElement("path", { d: "M21 19a2 2 0 0 1-2 2" }),
    React.createElement("path", { d: "M14 21h1" }),
    React.createElement("path", { d: "M9 21h1" }),
    React.createElement("path", { d: "M5 21a2 2 0 0 1-2-2" }),
    React.createElement("path", { d: "M3 14v1" }),
    React.createElement("path", { d: "M3 9v1" })));
exports.default = SvgFeatherKanbanSquareDashed;
