"use strict";
"use client";
import classNames from 'classnames';
import React__default from 'react';
import styles from './skeleton.module.css.js';

const Skeleton = React__default.forwardRef(function Skeleton2(props, ref) {
  const { className, ...otherProps } = props;
  return /* @__PURE__ */ React__default.createElement("div", { ref, className: classNames(className, styles.root), ...otherProps });
});

export { Skeleton };
//# sourceMappingURL=skeleton.js.map
