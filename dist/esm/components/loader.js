"use client";
import classNames from 'classnames';
import React__default from 'react';
import styles from './loader.module.css.js';

const Loader = React__default.forwardRef(function Loader(props, ref) {
    const { className, ...otherProps } = props;
    return React__default.createElement("div", { ref: ref, className: classNames(className, styles.root), ...otherProps });
});

export { Loader };
//# sourceMappingURL=loader.js.map
