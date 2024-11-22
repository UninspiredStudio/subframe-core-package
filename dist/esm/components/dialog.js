"use client";
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import React__default, { useCallback } from 'react';
import styles from './dialog.module.css.js';

const Root = React__default.forwardRef(function Dialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React__default.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React__default.createElement(RadixDialog.Portal, null,
            React__default.createElement(RadixDialog.Overlay, { ref: ref, asChild: true, className: classNames(className, styles.root), ...otherProps }))));
});
const Content = React__default.forwardRef(function Content({ onOpenAutoFocus, initialFocusRef, ...otherProps }, ref) {
    const onOpenAutoFocusCallback = useCallback((e) => {
        if (initialFocusRef) {
            e.preventDefault();
            initialFocusRef.current?.focus();
        }
        onOpenAutoFocus?.(e);
    }, [initialFocusRef, onOpenAutoFocus]);
    return React__default.createElement(RadixDialog.Content, { ref: ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback, ...otherProps });
});
const Dialog = { Root, Content };

export { Content, Dialog, Root };
//# sourceMappingURL=dialog.js.map
