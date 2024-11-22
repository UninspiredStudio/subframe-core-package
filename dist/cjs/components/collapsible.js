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
exports.Collapsible = exports.Root = exports.Content = exports.Trigger = exports.Chevron = void 0;
const RadixCollapsible = __importStar(require("@radix-ui/react-collapsible"));
const react_slot_1 = require("@radix-ui/react-slot");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const collapsible_module_css_1 = __importDefault(require("./collapsible.module.css"));
exports.Chevron = react_1.default.forwardRef(function CollapsibleChevron({ className, ...otherProps }, ref) {
    return (react_1.default.createElement(react_slot_1.Slot, { ref: ref, className: (0, classnames_1.default)(className, collapsible_module_css_1.default.chevron), ...otherProps }));
});
exports.Trigger = react_1.default.forwardRef(function Trigger({ className, children, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixCollapsible.Trigger, { className: (0, classnames_1.default)(className, collapsible_module_css_1.default.trigger), ref: ref, ...otherProps }, children));
});
exports.Content = react_1.default.forwardRef(function Content({ className, children, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixCollapsible.Content, { className: (0, classnames_1.default)(className, collapsible_module_css_1.default.content), ref: ref, ...otherProps }, children));
});
exports.Root = RadixCollapsible.Root;
exports.Collapsible = {
    Root: exports.Root,
    Trigger: exports.Trigger,
    Content: exports.Content,
    Chevron: exports.Chevron,
};
