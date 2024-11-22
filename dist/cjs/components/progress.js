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
exports.Progress = exports.Indicator = exports.Root = void 0;
const RadixProgress = __importStar(require("@radix-ui/react-progress"));
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const progress_module_css_1 = __importDefault(require("./progress.module.css"));
const DEFAULT_PROGRESS_VALUE = 0;
const ProgressContext = react_1.default.createContext(DEFAULT_PROGRESS_VALUE);
exports.Root = react_1.default.forwardRef(function ProgressRoot({ className, children, value, ...otherProps }, ref) {
    return (react_1.default.createElement(ProgressContext.Provider, { value: value || DEFAULT_PROGRESS_VALUE },
        react_1.default.createElement(RadixProgress.Root, { ref: ref, ...otherProps, value: value }, children)));
});
exports.Indicator = react_1.default.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    const progress = react_1.default.useContext(ProgressContext);
    return (react_1.default.createElement(RadixProgress.Indicator, { className: (0, classnames_1.default)(className, progress_module_css_1.default.indicator), ref: ref, asChild: true, style: { transform: `translateX(-${100 - progress}%)` }, ...otherProps }));
});
exports.Progress = { Root: exports.Root, Indicator: exports.Indicator };
