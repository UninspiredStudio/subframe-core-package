"use client";
import * as RadixProgress from "@radix-ui/react-progress";
import classNames from "classnames";
import React from "react";
import styles from "./progress.module.css";
const DEFAULT_PROGRESS_VALUE = 0;
const ProgressContext = React.createContext(DEFAULT_PROGRESS_VALUE);
export const Root = React.forwardRef(function ProgressRoot({ className, children, value, ...otherProps }, ref) {
    return (React.createElement(ProgressContext.Provider, { value: value || DEFAULT_PROGRESS_VALUE },
        React.createElement(RadixProgress.Root, { ref: ref, ...otherProps, value: value }, children)));
});
export const Indicator = React.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    const progress = React.useContext(ProgressContext);
    return (React.createElement(RadixProgress.Indicator, { className: classNames(className, styles.indicator), ref: ref, asChild: true, style: { transform: `translateX(-${100 - progress}%)` }, ...otherProps }));
});
export const Progress = { Root, Indicator };
