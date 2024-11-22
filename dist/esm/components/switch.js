"use client";
import * as RadixSwitch from "@radix-ui/react-switch";
import classNames from "classnames";
import React from "react";
import styles from "./switch.module.css";
export const Root = React.forwardRef(function Switch({ className, ...otherProps }, ref) {
    return React.createElement(RadixSwitch.Root, { ref: ref, className: classNames(className, styles.root), ...otherProps });
});
export const Thumb = React.forwardRef(function Thumb({ className, ...otherProps }, ref) {
    return React.createElement(RadixSwitch.Thumb, { ref: ref, className: classNames(className, styles.thumb), ...otherProps });
});
export const Switch = { Root, Thumb };
