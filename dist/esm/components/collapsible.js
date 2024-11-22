"use client";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import React from "react";
import styles from "./collapsible.module.css";
export const Chevron = React.forwardRef(function CollapsibleChevron({ className, ...otherProps }, ref) {
    return (React.createElement(Slot, { ref: ref, className: classNames(className, styles.chevron), ...otherProps }));
});
export const Trigger = React.forwardRef(function Trigger({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixCollapsible.Trigger, { className: classNames(className, styles.trigger), ref: ref, ...otherProps }, children));
});
export const Content = React.forwardRef(function Content({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixCollapsible.Content, { className: classNames(className, styles.content), ref: ref, ...otherProps }, children));
});
export const Root = RadixCollapsible.Root;
export const Collapsible = {
    Root,
    Trigger,
    Content,
    Chevron,
};
