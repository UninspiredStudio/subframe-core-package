"use strict";
"use client";
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import React__default from 'react';
import styles from './collapsible.module.css.js';

const Chevron = React__default.forwardRef(
  function CollapsibleChevron({ className, ...otherProps }, ref) {
    return /* @__PURE__ */ React__default.createElement(
      Slot,
      {
        ref,
        className: classNames(className, styles.chevron),
        ...otherProps
      }
    );
  }
);
const Trigger = React__default.forwardRef(function Trigger2({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(
    RadixCollapsible.Trigger,
    {
      className: classNames(className, styles.trigger),
      ref,
      ...otherProps
    },
    children
  );
});
const Content = React__default.forwardRef(function Content2({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(
    RadixCollapsible.Content,
    {
      className: classNames(className, styles.content),
      ref,
      ...otherProps
    },
    children
  );
});
const Root = RadixCollapsible.Root;
const Collapsible = {
  Root,
  Trigger,
  Content,
  Chevron
};

export { Chevron, Collapsible, Content, Root, Trigger };
//# sourceMappingURL=collapsible.js.map
