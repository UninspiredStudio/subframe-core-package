"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var skeleton_module = require('./skeleton.module.css.js');

const Skeleton = React.forwardRef(function Skeleton2(props, ref) {
  const { className, ...otherProps } = props;
  return /* @__PURE__ */ React.createElement("div", { ref, className: classNames(className, skeleton_module.root), ...otherProps });
});

exports.Skeleton = Skeleton;
//# sourceMappingURL=skeleton.js.map
