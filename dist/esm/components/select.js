"use client";
import * as RadixSelect from "@radix-ui/react-select";
import classNames from "classnames";
import React from "react";
import styles from "./select.module.css";
export const Root = React.forwardRef(function SelectRoot({ children, ...otherProps }, _ref) {
    return React.createElement(RadixSelect.Root, { ...otherProps }, children);
});
export const Trigger = React.forwardRef(function Trigger({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixSelect.Trigger, { className: classNames(className, styles.trigger), ref: ref, ...otherProps }, children));
});
export const Value = React.forwardRef(function Value({ children, // NOTE: ignored
placeholder, className, ...otherProps }, ref) {
    return (
    // NOTE: this needs a wrapper since Radix strips all styling from RadixSelect.Value
    React.createElement("span", { className: classNames(className, styles.value), ...otherProps, ref: ref },
        React.createElement(RadixSelect.Value, { placeholder: placeholder })));
});
export const Content = React.forwardRef(function Content({ className, children, portalClassName, position = "popper", sideOffset = 4, ...otherProps }, ref) {
    return (React.createElement(RadixSelect.Portal, { className: portalClassName },
        React.createElement(RadixSelect.Content, { className: classNames(className, styles.content), ref: ref, position: position, sideOffset: sideOffset, ...otherProps },
            React.createElement(Select.Viewport, { asChild: true }, children))));
});
export const Viewport = React.forwardRef(function Viewport({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixSelect.Viewport, { className: classNames(className, styles.viewport), ref: ref, ...otherProps }, children));
});
export const Item = React.forwardRef(function Item({ className, children, value, ...otherProps }, ref) {
    return (React.createElement(RadixSelect.Item, { className: classNames(className, styles.item), ref: ref, value: value, ...otherProps }, children));
});
export const ItemText = RadixSelect.ItemText;
export const Select = {
    Root,
    Trigger,
    Value,
    Content,
    Viewport,
    Item,
    ItemText,
};
