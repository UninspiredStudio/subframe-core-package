"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBFRAME_FONT_MIXINS = void 0;
exports.twClassNames = twClassNames;
const classnames_1 = __importDefault(require("classnames"));
const tailwind_merge_1 = require("tailwind-merge");
// HACK: keep this in sync with the default fonts
exports.SUBFRAME_FONT_MIXINS = [
    // old font mixins
    "text-label",
    "text-label-bold",
    "text-body",
    "text-body-bold",
    "text-subheader",
    "text-section-header",
    "text-header",
    "text-monospace-body",
    // new font mixins
    "text-caption",
    "text-caption-bold",
    "text-heading-3",
    "text-heading-2",
    "text-heading-1",
];
const customTWMerge = (0, tailwind_merge_1.createTailwindMerge)(() => {
    const defaultConfig = (0, tailwind_merge_1.getDefaultConfig)();
    return {
        ...defaultConfig,
        classGroups: {
            ...defaultConfig.classGroups,
            // "subframe-colors": [{ text: [isTextColor] }],
            "subframe-font-mixins": exports.SUBFRAME_FONT_MIXINS,
            // "font-size": [{ text: [isFontStyle] }, ...defaultConfig.classGroups["font-size"]],
            // leading: [{ text: [isFontStyle] }, ...defaultConfig.classGroups.leading],
            // "font-weight": [{ text: [isFontStyle] }, ...defaultConfig.classGroups["font-weight"]],
        },
        conflictingClassGroups: {
            // font colors
            // "text-color": ["subframe-colors"],
            // font mixins
            "subframe-font-mixins": ["font-size", "leading", "font-weight"],
            "font-size": ["subframe-font-mixins"],
            leading: ["subframe-font-mixins"],
            "font-weight": ["subframe-font-mixins"],
        },
    };
});
function twClassNames(...args) {
    return customTWMerge((0, classnames_1.default)(...args));
}
