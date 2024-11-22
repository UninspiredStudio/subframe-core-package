"use client";
import classNames from "classnames";
import React from "react";
import styles from "./loader.module.css";
export const Loader = React.forwardRef(function Loader(props, ref) {
    const { className, ...otherProps } = props;
    return React.createElement("div", { ref: ref, className: classNames(className, styles.root), ...otherProps });
});
