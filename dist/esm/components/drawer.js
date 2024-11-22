"use client";
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import React__default from 'react';
import styles from './drawer.module.css.js';

const Root = React__default.forwardRef(function Drawer({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
    return (React__default.createElement(RadixDialog.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React__default.createElement(RadixDialog.Portal, null,
            React__default.createElement(RadixDialog.Overlay, { ref: ref, asChild: true, className: classNames(className, styles.root), ...otherProps }))));
});
const Content = React__default.forwardRef(function Content({ ...otherProps }, ref) {
    return React__default.createElement(RadixDialog.Content, { ref: ref, asChild: true, ...otherProps });
});
const Drawer = { Root, Content };

export { Content, Drawer, Root };
//# sourceMappingURL=drawer.js.map
