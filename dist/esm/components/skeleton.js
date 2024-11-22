"use client";
import classNames from "classnames";
import React from "react";
import styles from "./skeleton.module.css";
export const Skeleton = React.forwardRef(function Skeleton(props, ref) {
    const { className, ...otherProps } = props;
    return React.createElement("div", { ref: ref, className: classNames(className, styles.root), ...otherProps });
});
