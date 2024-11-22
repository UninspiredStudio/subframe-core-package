"use client";
import * as RadixSwitch from '@radix-ui/react-switch';
import classNames from 'classnames';
import React__default from 'react';
import styles from './switch.module.css.js';

const Root = React__default.forwardRef(function Switch({ className, ...otherProps }, ref) {
    return React__default.createElement(RadixSwitch.Root, { ref: ref, className: classNames(className, styles.root), ...otherProps });
});
const Thumb = React__default.forwardRef(function Thumb({ className, ...otherProps }, ref) {
    return React__default.createElement(RadixSwitch.Thumb, { ref: ref, className: classNames(className, styles.thumb), ...otherProps });
});
const Switch = { Root, Thumb };

export { Root, Switch, Thumb };
//# sourceMappingURL=switch.js.map
