"use client";
import * as RadixDialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import React from "react";
import styles from "./fullscreen-dialog.module.css";
export const Root = React.forwardRef(function FullScreenDialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(RadixDialog.Portal, null,
            React.createElement(RadixDialog.Overlay, { className: styles.root },
                React.createElement(RadixDialog.Content, { ref: ref, asChild: true, className: classNames(className, styles.content), ...otherProps })))));
});
export const FullScreenDialog = { Root };
