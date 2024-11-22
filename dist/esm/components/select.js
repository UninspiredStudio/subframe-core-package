"use strict";
"use client";
import * as RadixSelect from '@radix-ui/react-select';
import classNames from 'classnames';
import React__default from 'react';
import styles from './select.module.css.js';

const Root = React__default.forwardRef(
  function SelectRoot({ children, ...otherProps }, _ref) {
    return /* @__PURE__ */ React__default.createElement(RadixSelect.Root, { ...otherProps }, children);
  }
);
const Trigger = React__default.forwardRef(function Trigger2({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(
    RadixSelect.Trigger,
    {
      className: classNames(className, styles.trigger),
      ref,
      ...otherProps
    },
    children
  );
});
const Value = React__default.forwardRef(function Value2({
  children,
  // NOTE: ignored
  placeholder,
  className,
  ...otherProps
}, ref) {
  return (
    // NOTE: this needs a wrapper since Radix strips all styling from RadixSelect.Value
    /* @__PURE__ */ React__default.createElement(
      "span",
      {
        className: classNames(className, styles.value),
        ...otherProps,
        ref
      },
      /* @__PURE__ */ React__default.createElement(RadixSelect.Value, { placeholder })
    )
  );
});
const Content = React__default.forwardRef(
  function Content2({
    className,
    children,
    portalClassName,
    position = "popper",
    sideOffset = 4,
    ...otherProps
  }, ref) {
    return /* @__PURE__ */ React__default.createElement(RadixSelect.Portal, { className: portalClassName }, /* @__PURE__ */ React__default.createElement(
      RadixSelect.Content,
      {
        className: classNames(className, styles.content),
        ref,
        position,
        sideOffset,
        ...otherProps
      },
      /* @__PURE__ */ React__default.createElement(Select.Viewport, { asChild: true }, children)
    ));
  }
);
const Viewport = React__default.forwardRef(function Viewport2({ className, children, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(
    RadixSelect.Viewport,
    {
      className: classNames(className, styles.viewport),
      ref,
      ...otherProps
    },
    children
  );
});
const Item = React__default.forwardRef(function Item2({ className, children, value, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement(
    RadixSelect.Item,
    {
      className: classNames(className, styles.item),
      ref,
      value,
      ...otherProps
    },
    children
  );
});
const ItemText = RadixSelect.ItemText;
const Select = {
  Root,
  Trigger,
  Value,
  Content,
  Viewport,
  Item,
  ItemText
};

export { Content, Item, ItemText, Root, Select, Trigger, Value, Viewport };
//# sourceMappingURL=select.js.map
