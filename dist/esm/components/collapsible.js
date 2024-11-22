"use client";
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import React__default from 'react';
import styles from './collapsible.module.css.js';

const Chevron = React__default.forwardRef(function CollapsibleChevron({ className, ...otherProps }, ref) {
    return (React__default.createElement(Slot, { ref: ref, className: classNames(className, styles.chevron), ...otherProps }));
});
const Trigger = React__default.forwardRef(function Trigger({ className, children, ...otherProps }, ref) {
    return (React__default.createElement(RadixCollapsible.Trigger, { className: classNames(className, styles.trigger), ref: ref, ...otherProps }, children));
});
const Content = React__default.forwardRef(function Content({ className, children, ...otherProps }, ref) {
    return (React__default.createElement(RadixCollapsible.Content, { className: classNames(className, styles.content), ref: ref, ...otherProps }, children));
});
const Root = RadixCollapsible.Root;
const Collapsible = {
    Root,
    Trigger,
    Content,
    Chevron,
};

export { Chevron, Collapsible, Content, Root, Trigger };
//# sourceMappingURL=collapsible.js.map
