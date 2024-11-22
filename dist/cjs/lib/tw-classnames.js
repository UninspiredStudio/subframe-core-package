"use strict";
'use strict';

var classNames = require('classnames');
var tailwindMerge = require('tailwind-merge');

const SUBFRAME_FONT_MIXINS = [
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
  "text-heading-1"
];
const customTWMerge = tailwindMerge.createTailwindMerge(() => {
  const defaultConfig = tailwindMerge.getDefaultConfig();
  return {
    ...defaultConfig,
    classGroups: {
      ...defaultConfig.classGroups,
      // "subframe-colors": [{ text: [isTextColor] }],
      "subframe-font-mixins": SUBFRAME_FONT_MIXINS
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
      "font-weight": ["subframe-font-mixins"]
    }
  };
});
function twClassNames(...args) {
  return customTWMerge(classNames(...args));
}

exports.SUBFRAME_FONT_MIXINS = SUBFRAME_FONT_MIXINS;
exports.twClassNames = twClassNames;
//# sourceMappingURL=tw-classnames.js.map
