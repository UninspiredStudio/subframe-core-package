"use client";
import * as RadixSlider from "@radix-ui/react-slider";
import classNames from "classnames";
import React from "react";
import styles from "./slider.module.css";
export const Root = React.forwardRef(function ProgressRoot({ className, children, defaultValue = [27], ...otherProps }, ref) {
    return (React.createElement(RadixSlider.Root, { ref: ref, className: classNames(className, styles.sliderRoot), defaultValue: defaultValue, ...otherProps }, children));
});
export const Track = React.forwardRef(function Indicator({ className, children, ...otherProps }, ref) {
    return (React.createElement(RadixSlider.Track, { className: classNames(className, styles.sliderTrack), ref: ref, ...otherProps }, children));
});
export const Range = React.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    return React.createElement(RadixSlider.Range, { className: classNames(className, styles.sliderRange), ref: ref, ...otherProps });
});
export const Thumb = React.forwardRef(function Indicator({ className, ...otherProps }, ref) {
    return React.createElement(RadixSlider.Thumb, { className: classNames(className, styles.sliderThumb), ref: ref, ...otherProps });
});
export const Slider = { Root, Track, Range, Thumb };
