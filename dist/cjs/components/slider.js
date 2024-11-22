"use strict";
"use client";
'use strict';

var RadixSlider = require('@radix-ui/react-slider');
var classNames = require('classnames');
var React = require('react');
var slider_module = require('./slider.module.css.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var RadixSlider__namespace = /*#__PURE__*/_interopNamespaceDefault(RadixSlider);

const Root = React.forwardRef(function ProgressRoot({ className, children, defaultValue = [27], ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(
    RadixSlider__namespace.Root,
    {
      ref,
      className: classNames(className, slider_module.sliderRoot),
      defaultValue,
      ...otherProps
    },
    children
  );
});
const Track = React.forwardRef(function Indicator({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(RadixSlider__namespace.Track, { className: classNames(className, slider_module.sliderTrack), ref, ...otherProps }, children);
});
const Range = React.forwardRef(function Indicator2({ className, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(RadixSlider__namespace.Range, { className: classNames(className, slider_module.sliderRange), ref, ...otherProps });
});
const Thumb = React.forwardRef(function Indicator3({ className, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement(RadixSlider__namespace.Thumb, { className: classNames(className, slider_module.sliderThumb), ref, ...otherProps });
});
const Slider = { Root, Track, Range, Thumb };

exports.Range = Range;
exports.Root = Root;
exports.Slider = Slider;
exports.Thumb = Thumb;
exports.Track = Track;
//# sourceMappingURL=slider.js.map
