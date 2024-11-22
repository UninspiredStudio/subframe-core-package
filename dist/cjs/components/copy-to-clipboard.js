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
exports.CopyToClipboard = exports.Root = void 0;
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const react_1 = __importStar(require("react"));
const compose_react_refs_1 = require("../lib/compose-react-refs");
exports.Root = react_1.default.forwardRef(function CopyToClipboardRootComponent(props, ref) {
    const { clipboardText, onCopy, children, options, ...otherProps } = props;
    const format = options?.format;
    const elem = children && react_1.default.Children.only(children);
    const elemOnClick = elem?.props?.onClick;
    const onClick = (0, react_1.useCallback)((event) => {
        if (clipboardText !== undefined) {
            if (format) {
                (0, copy_to_clipboard_1.default)(clipboardText, { format });
            }
            else {
                (0, copy_to_clipboard_1.default)(clipboardText);
            }
            if (onCopy) {
                onCopy();
            }
        }
        // Bypass onClick if it was present
        if (typeof elemOnClick === "function") {
            elemOnClick(event);
        }
    }, [onCopy, clipboardText, elemOnClick, format]);
    return elem
        ? react_1.default.cloneElement(elem, { ...otherProps, onClick, ref: (0, compose_react_refs_1.composeRefs)(ref, elem?.props?.ref) })
        : null;
});
exports.CopyToClipboard = { Root: exports.Root };
