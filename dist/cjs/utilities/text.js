"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = Text;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const text_module_css_1 = __importDefault(require("./text.module.css"));
function Text(props) {
    const { className, variant = "body", ellipsis, color = "default", ...otherProps } = props;
    return (react_1.default.createElement("span", { className: (0, classnames_1.default)(className, {
            [text_module_css_1.default.label]: variant === "label",
            [text_module_css_1.default.labelBold]: variant === "label-bold",
            [text_module_css_1.default.body]: variant === "body",
            [text_module_css_1.default.bodyBold]: variant === "body-bold",
            [text_module_css_1.default.subheader]: variant === "subheader",
            [text_module_css_1.default.sectionHeader]: variant === "section-header",
            [text_module_css_1.default.monospaceBody]: variant === "monospace-body",
            [text_module_css_1.default.header]: variant === "header",
            [text_module_css_1.default.ellipsis]: ellipsis,
            [text_module_css_1.default.colorSubtext]: color === "subtext",
        }), ...otherProps }));
}
