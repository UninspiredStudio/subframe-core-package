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
exports.Slider = exports.Thumb = exports.Range = exports.Track = exports.Root = void 0;
const RadixSlider = __importStar(require("@radix-ui/react-slider"));
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const slider_module_css_1 = __importDefault(require("./slider.module.css"));
exports.Root = react_1.default.forwardRef(function ProgressRoot({ className, children, defaultValue = [27], ...otherProps }, ref) {
    return (react_1.default.createElement(RadixSlider.Root, { ref: ref, className: (0, classnames_1.default)(className, slider_module_css_1.default.sliderRoot), defaultValue: defaultValue, ...otherProps }, children));
});
exports.Track = react_1.default.forwardRef(function Indicator({ className, children, ...otherProps }, ref) {
    return (react_1.default.createElement(RadixSlider.Track, { className: (0, classnames_1.default)(className, slider_module_css_1.default.sliderTrack), ref: ref, ...otherProps }, children));
});
exports.Range = react_1.default.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    return react_1.default.createElement(RadixSlider.Range, { className: (0, classnames_1.default)(className, slider_module_css_1.default.sliderRange), ref: ref, ...otherProps });
});
exports.Thumb = react_1.default.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    return react_1.default.createElement(RadixSlider.Thumb, { className: (0, classnames_1.default)(className, slider_module_css_1.default.sliderThumb), ref: ref, ...otherProps });
});
exports.Slider = { Root: exports.Root, Track: exports.Track, Range: exports.Range, Thumb: exports.Thumb };
