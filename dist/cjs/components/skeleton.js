"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var skeleton_module = require('./skeleton.module.css.js');

const Skeleton = React.forwardRef(function Skeleton(props, ref) {
    const { className, ...otherProps } = props;
    return React.createElement("div", { ref: ref, className: classNames(className, skeleton_module.root), ...otherProps });
});

exports.Skeleton = Skeleton;
//# sourceMappingURL=skeleton.js.map
