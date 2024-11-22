"use client";
import * as RadixProgress from '@radix-ui/react-progress';
import classNames from 'classnames';
import React__default from 'react';
import styles from './progress.module.css.js';

const DEFAULT_PROGRESS_VALUE = 0;
const ProgressContext = React__default.createContext(DEFAULT_PROGRESS_VALUE);
const Root = React__default.forwardRef(function ProgressRoot({ className, children, value, ...otherProps }, ref) {
    return (React__default.createElement(ProgressContext.Provider, { value: value || DEFAULT_PROGRESS_VALUE },
        React__default.createElement(RadixProgress.Root, { ref: ref, ...otherProps, value: value }, children)));
});
const Indicator = React__default.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    const progress = React__default.useContext(ProgressContext);
    return (React__default.createElement(RadixProgress.Indicator, { className: classNames(className, styles.indicator), ref: ref, asChild: true, style: { transform: `translateX(-${100 - progress}%)` }, ...otherProps }));
});
const Progress = { Root, Indicator };

export { Indicator, Progress, Root };
//# sourceMappingURL=progress.js.map
