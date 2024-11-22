"use client";
import * as RadixDialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import React from "react";
import styles from "./drawer.module.css";
export const Root = React.forwardRef(function Drawer({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(RadixDialog.Portal, null,
            React.createElement(RadixDialog.Overlay, { ref: ref, asChild: true, className: classNames(className, styles.root), ...otherProps }))));
});
export const Content = React.forwardRef(function Content({ ...otherProps }, ref) {
    return React.createElement(RadixDialog.Content, { ref: ref, asChild: true, ...otherProps });
});
export const Drawer = { Root, Content };
