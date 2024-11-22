"use strict";
"use client";
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import React__default from 'react';
import styles from './fullscreen-dialog.module.css.js';

const Root = React__default.forwardRef(function FullScreenDialog2({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(RadixDialog.Root, { defaultOpen, open, onOpenChange, modal }, /* @__PURE__ */ React__default.createElement(RadixDialog.Portal, null, /* @__PURE__ */ React__default.createElement(RadixDialog.Overlay, { className: styles.root }, /* @__PURE__ */ React__default.createElement(RadixDialog.Content, { ref, asChild: true, className: classNames(className, styles.content), ...otherProps }))));
});
const FullScreenDialog = { Root };

export { FullScreenDialog, Root };
//# sourceMappingURL=fullscreen-dialog.js.map
