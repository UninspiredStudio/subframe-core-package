"use strict";
"use client";
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import React__default from 'react';

const Root = React__default.forwardRef(function Root2({ className, type = "single", ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(RadixToggleGroup.Root, { ref, className, type, ...otherProps });
});
const Item = RadixToggleGroup.Item;
const ToggleGroup = { Root, Item };

export { Item, Root, ToggleGroup };
//# sourceMappingURL=toggle-group.js.map
