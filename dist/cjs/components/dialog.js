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
exports.Dialog = exports.Content = exports.Root = void 0;
const RadixDialog = __importStar(require("@radix-ui/react-dialog"));
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const dialog_module_css_1 = __importDefault(require("./dialog.module.css"));
exports.Root = react_1.default.forwardRef(function Dialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        react_1.default.createElement(RadixDialog.Portal, null,
            react_1.default.createElement(RadixDialog.Overlay, { ref: ref, asChild: true, className: (0, classnames_1.default)(className, dialog_module_css_1.default.root), ...otherProps }))));
});
exports.Content = react_1.default.forwardRef(function Content({ onOpenAutoFocus, initialFocusRef, ...otherProps }, ref) {
    const onOpenAutoFocusCallback = (0, react_1.useCallback)((e) => {
        if (initialFocusRef) {
            e.preventDefault();
            initialFocusRef.current?.focus();
        }
        onOpenAutoFocus?.(e);
    }, [initialFocusRef, onOpenAutoFocus]);
    return react_1.default.createElement(RadixDialog.Content, { ref: ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback, ...otherProps });
});
exports.Dialog = { Root: exports.Root, Content: exports.Content };
