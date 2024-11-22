"use strict";
"use client";
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import React__default, { useCallback } from 'react';
import styles from './dialog.module.css.js';

const Root = React__default.forwardRef(function Dialog2({ className, defaultOpen, open, onOpenChange, modal, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(RadixDialog.Root, { defaultOpen, open, onOpenChange, modal }, /* @__PURE__ */ React__default.createElement(RadixDialog.Portal, null, /* @__PURE__ */ React__default.createElement(RadixDialog.Overlay, { ref, asChild: true, className: classNames(className, styles.root), ...otherProps })));
});
const Content = React__default.forwardRef(function Content2({ onOpenAutoFocus, initialFocusRef, ...otherProps }, ref) {
  const onOpenAutoFocusCallback = useCallback(
    (e) => {
      if (initialFocusRef) {
        e.preventDefault();
        initialFocusRef.current?.focus();
      }
      onOpenAutoFocus?.(e);
    },
    [initialFocusRef, onOpenAutoFocus]
  );
  return /* @__PURE__ */ React__default.createElement(RadixDialog.Content, { ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback, ...otherProps });
});
const Dialog = { Root, Content };

export { Content, Dialog, Root };
//# sourceMappingURL=dialog.js.map
