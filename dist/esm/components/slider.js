"use client";
import * as RadixSlider from '@radix-ui/react-slider';
import classNames from 'classnames';
import React__default from 'react';
import styles from './slider.module.css.js';

const Root = React__default.forwardRef(function ProgressRoot({ className, children, defaultValue = [27], ...otherProps }, ref) {
    return (React__default.createElement(RadixSlider.Root, { ref: ref, className: classNames(className, styles.sliderRoot), defaultValue: defaultValue, ...otherProps }, children));
});
const Track = React__default.forwardRef(function Indicator({ className, children, ...otherProps }, ref) {
    return (React__default.createElement(RadixSlider.Track, { className: classNames(className, styles.sliderTrack), ref: ref, ...otherProps }, children));
});
const Range = React__default.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    return React__default.createElement(RadixSlider.Range, { className: classNames(className, styles.sliderRange), ref: ref, ...otherProps });
});
const Thumb = React__default.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    return React__default.createElement(RadixSlider.Thumb, { className: classNames(className, styles.sliderThumb), ref: ref, ...otherProps });
});
const Slider = { Root, Track, Range, Thumb };

export { Range, Root, Slider, Thumb, Track };
//# sourceMappingURL=slider.js.map
