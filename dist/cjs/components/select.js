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
exports.Select = exports.ItemText = exports.Item = exports.Viewport = exports.Content = exports.Value = exports.Trigger = exports.Root = void 0;
const RadixSelect = __importStar(require("@radix-ui/react-select"));
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const select_module_css_1 = __importDefault(require("./select.module.css"));
exports.Root = react_1.default.forwardRef(function SelectRoot({ children, ...otherProps }, _ref) {
    return react_1.default.createElement(RadixSelect.Root, { ...otherProps }, children);
});
exports.Trigger = react_1.default.forwardRef(function Trigger({ className, children, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixSelect.Trigger, { className: (0, classnames_1.default)(className, select_module_css_1.default.trigger), ref: ref, ...otherProps }, children));
});
exports.Value = react_1.default.forwardRef(function Value({ children, // NOTE: ignored
placeholder, className, ...otherProps }, ref) {
    return (
    // NOTE: this needs a wrapper since Radix strips all styling from RadixSelect.Value
    react_1.default.createElement("span", { className: (0, classnames_1.default)(className, select_module_css_1.default.value), ...otherProps, ref: ref },
        react_1.default.createElement(RadixSelect.Value, { placeholder: placeholder })));
});
exports.Content = react_1.default.forwardRef(function Content({ className, children, portalClassName, position = "popper", sideOffset = 4, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixSelect.Portal, { className: portalClassName },
        react_1.default.createElement(RadixSelect.Content, { className: (0, classnames_1.default)(className, select_module_css_1.default.content), ref: ref, position: position, sideOffset: sideOffset, ...otherProps },
            react_1.default.createElement(exports.Select.Viewport, { asChild: true }, children))));
});
exports.Viewport = react_1.default.forwardRef(function Viewport({ className, children, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixSelect.Viewport, { className: (0, classnames_1.default)(className, select_module_css_1.default.viewport), ref: ref, ...otherProps }, children));
});
exports.Item = react_1.default.forwardRef(function Item({ className, children, value, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixSelect.Item, { className: (0, classnames_1.default)(className, select_module_css_1.default.item), ref: ref, value: value, ...otherProps }, children));
});
exports.ItemText = RadixSelect.ItemText;
exports.Select = {
    Root: exports.Root,
    Trigger: exports.Trigger,
    Value: exports.Value,
    Content: exports.Content,
    Viewport: exports.Viewport,
    Item: exports.Item,
    ItemText: exports.ItemText,
};
