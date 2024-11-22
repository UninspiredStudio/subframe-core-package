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
const SvgFeatherCog = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }),
    React.createElement("path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }),
    React.createElement("path", { d: "M12 2v2" }),
    React.createElement("path", { d: "M12 22v-2" }),
    React.createElement("path", { d: "m17 20.66-1-1.73" }),
    React.createElement("path", { d: "M11 10.27 7 3.34" }),
    React.createElement("path", { d: "m20.66 17-1.73-1" }),
    React.createElement("path", { d: "m3.34 7 1.73 1" }),
    React.createElement("path", { d: "M14 12h8" }),
    React.createElement("path", { d: "M2 12h2" }),
    React.createElement("path", { d: "m20.66 7-1.73 1" }),
    React.createElement("path", { d: "m3.34 17 1.73-1" }),
    React.createElement("path", { d: "m17 3.34-1 1.73" }),
    React.createElement("path", { d: "m11 13.73-4 6.93" })));
exports.default = SvgFeatherCog;
