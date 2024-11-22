"use client";
import classNames from 'classnames';
import React__default, { lazy, Suspense } from 'react';
import styles from './icon.module.css.js';
import { icons } from '../assets/icons/final/index.js';

const IconFallback = () => React__default.createElement("svg", { width: "1em", height: "1em" });
const Icon = React__default.forwardRef(function Icon(props, ref) {
    const { className, name, ...otherProps } = props;
    if (name === null) {
        return null;
    }
    let children;
    if (name === "empty") {
        children = React__default.createElement(IconFallback, null);
    }
    else {
        const lazyIcon = icons[name];
        // TODO warn?
        if (!lazyIcon) {
            console.warn(`Icon rendered with invalid name: ${name}`);
            return null;
        }
        const Component = lazy(lazyIcon);
        children = (React__default.createElement(Suspense, { fallback: React__default.createElement(IconFallback, null) },
            React__default.createElement(Component, null)));
    }
    return (React__default.createElement("span", { className: classNames(className, styles.root), ref: ref, ...otherProps }, children));
});

export { Icon };
//# sourceMappingURL=icon.js.map
