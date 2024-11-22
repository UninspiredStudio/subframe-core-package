"use client";
import * as RadixDialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import React, { useCallback } from "react";
import styles from "./dialog.module.css";
export const Root = React.forwardRef(function Dialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(RadixDialog.Portal, null,
            React.createElement(RadixDialog.Overlay, { ref: ref, asChild: true, className: classNames(className, styles.root), ...otherProps }))));
});
export const Content = React.forwardRef(function Content({ onOpenAutoFocus, initialFocusRef, ...otherProps }, ref) {
    const onOpenAutoFocusCallback = useCallback((e) => {
        if (initialFocusRef) {
            e.preventDefault();
            initialFocusRef.current?.focus();
        }
        onOpenAutoFocus?.(e);
    }, [initialFocusRef, onOpenAutoFocus]);
    return React.createElement(RadixDialog.Content, { ref: ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback, ...otherProps });
});
export const Dialog = { Root, Content };
