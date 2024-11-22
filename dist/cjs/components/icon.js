"use strict";
"use client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const icon_module_css_1 = __importDefault(require("./icon.module.css"));
const final_1 = require("src/assets/icons/final");
const IconFallback = () => react_1.default.createElement("svg", { width: "1em", height: "1em" });
exports.Icon = react_1.default.forwardRef(function Icon(props, ref) {
    const { className, name, ...otherProps } = props;
    if (name === null) {
        return null;
    }
    let children;
    if (name === "empty") {
        children = react_1.default.createElement(IconFallback, null);
    }
    else {
        const lazyIcon = final_1.icons[name];
        // TODO warn?
        if (!lazyIcon) {
            console.warn(`Icon rendered with invalid name: ${name}`);
            return null;
        }
        const Component = (0, react_1.lazy)(lazyIcon);
        children = (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(IconFallback, null) },
            react_1.default.createElement(Component, null)));
    }
    return (react_1.default.createElement("span", { className: (0, classnames_1.default)(className, icon_module_css_1.default.root), ref: ref, ...otherProps }, children));
});
