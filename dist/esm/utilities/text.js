"use client";
import classNames from 'classnames';
import React__default from 'react';
import styles from './text.module.css.js';

function Text(props) {
    const { className, variant = "body", ellipsis, color = "default", ...otherProps } = props;
    return (React__default.createElement("span", { className: classNames(className, {
            [styles.label]: variant === "label",
            [styles.labelBold]: variant === "label-bold",
            [styles.body]: variant === "body",
            [styles.bodyBold]: variant === "body-bold",
            [styles.subheader]: variant === "subheader",
            [styles.sectionHeader]: variant === "section-header",
            [styles.monospaceBody]: variant === "monospace-body",
            [styles.header]: variant === "header",
            [styles.ellipsis]: ellipsis,
            [styles.colorSubtext]: color === "subtext",
        }), ...otherProps }));
}

export { Text };
//# sourceMappingURL=text.js.map
