"use client";
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import React__default from 'react';
import styles from './fullscreen-dialog.module.css.js';

const Root = React__default.forwardRef(function FullScreenDialog({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React__default.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React__default.createElement(RadixDialog.Portal, null,
            React__default.createElement(RadixDialog.Overlay, { className: styles.root },
                React__default.createElement(RadixDialog.Content, { ref: ref, asChild: true, className: classNames(className, styles.content), ...otherProps })))));
});
const FullScreenDialog = { Root };

export { FullScreenDialog, Root };
//# sourceMappingURL=fullscreen-dialog.js.map
