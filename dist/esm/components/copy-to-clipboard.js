"use client";
import copy from "copy-to-clipboard";
import React, { useCallback } from "react";
import { composeRefs } from "../lib/compose-react-refs";
export const Root = React.forwardRef(function CopyToClipboardRootComponent(props, ref) {
    const { clipboardText, onCopy, children, options, ...otherProps } = props;
    const format = options?.format;
    const elem = children && React.Children.only(children);
    const elemOnClick = elem?.props?.onClick;
    const onClick = useCallback((event) => {
        if (clipboardText !== undefined) {
            if (format) {
                copy(clipboardText, { format });
            }
            else {
                copy(clipboardText);
            }
            if (onCopy) {
                onCopy();
            }
        }
        // Bypass onClick if it was present
        if (typeof elemOnClick === "function") {
            elemOnClick(event);
        }
    }, [onCopy, clipboardText, elemOnClick, format]);
    return elem
        ? React.cloneElement(elem, { ...otherProps, onClick, ref: composeRefs(ref, elem?.props?.ref) })
        : null;
});
export const CopyToClipboard = { Root };
