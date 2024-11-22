"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const skeleton_module_css_1 = __importDefault(require("./skeleton.module.css"));
exports.Skeleton = react_1.default.forwardRef(function Skeleton(props, ref) {
    const { className, ...otherProps } = props;
    return react_1.default.createElement("div", { ref: ref, className: (0, classnames_1.default)(className, skeleton_module_css_1.default.root), ...otherProps });
});
