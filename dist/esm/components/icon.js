"use client";
import classNames from "classnames";
import React, { lazy, Suspense } from "react";
import styles from "./icon.module.css";
import { icons } from "src/assets/icons/final";
const IconFallback = () => React.createElement("svg", { width: "1em", height: "1em" });
export const Icon = React.forwardRef(function Icon(props, ref) {
    const { className, name, ...otherProps } = props;
    if (name === null) {
        return null;
    }
    let children;
    if (name === "empty") {
        children = React.createElement(IconFallback, null);
    }
    else {
        const lazyIcon = icons[name];
        // TODO warn?
        if (!lazyIcon) {
            console.warn(`Icon rendered with invalid name: ${name}`);
            return null;
        }
        const Component = lazy(lazyIcon);
        children = (React.createElement(Suspense, { fallback: React.createElement(IconFallback, null) },
            React.createElement(Component, null)));
    }
    return (React.createElement("span", { className: classNames(className, styles.root), ref: ref, ...otherProps }, children));
});
