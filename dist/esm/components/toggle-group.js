"use client";
import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import React from "react";
export const Root = React.forwardRef(function Root({ className, type = "single", ...otherProps }, ref) {
    return React.createElement(RadixToggleGroup.Root, { ref: ref, className: className, type: type, ...otherProps });
});
export const Item = RadixToggleGroup.Item;
export const ToggleGroup = { Root, Item };
