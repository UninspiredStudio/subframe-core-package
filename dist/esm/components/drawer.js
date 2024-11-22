"use strict";
"use client";
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import React__default from 'react';
import styles from './drawer.module.css.js';

const Root = React__default.forwardRef(function Drawer2({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(RadixDialog.Root, { defaultOpen, open, onOpenChange, modal }, /* @__PURE__ */ React__default.createElement(RadixDialog.Portal, null, /* @__PURE__ */ React__default.createElement(RadixDialog.Overlay, { ref, asChild: true, className: classNames(className, styles.root), ...otherProps })));
});
const Content = React__default.forwardRef(function Content2({ ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(RadixDialog.Content, { ref, asChild: true, ...otherProps });
});
const Drawer = { Root, Content };

export { Content, Drawer, Root };
//# sourceMappingURL=drawer.js.map
