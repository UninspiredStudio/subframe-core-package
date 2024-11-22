"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var loader_module = require('./loader.module.css.js');

const Loader = React.forwardRef(function Loader(props, ref) {
    const { className, ...otherProps } = props;
    return React.createElement("div", { ref: ref, className: classNames(className, loader_module.root), ...otherProps });
});

exports.Loader = Loader;
//# sourceMappingURL=loader.js.map
