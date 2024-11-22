"use client";
'use strict';

var copy = require('copy-to-clipboard');
var React = require('react');
var composeReactRefs = require('../lib/compose-react-refs.js');

const Root = React.forwardRef(function CopyToClipboardRootComponent(props, ref) {
    const { clipboardText, onCopy, children, options, ...otherProps } = props;
    const format = options?.format;
    const elem = children && React.Children.only(children);
    const elemOnClick = elem?.props?.onClick;
    const onClick = React.useCallback((event) => {
        if (clipboardText !== undefined) {
            if (format) {
                copy(clipboardText, { format });
            }
            else {
                copy(clipboardText);
            }
            if (onCopy) {
                onCopy();
            }
        }
        // Bypass onClick if it was present
        if (typeof elemOnClick === "function") {
            elemOnClick(event);
        }
    }, [onCopy, clipboardText, elemOnClick, format]);
    return elem
        ? React.cloneElement(elem, { ...otherProps, onClick, ref: composeReactRefs.composeRefs(ref, elem?.props?.ref) })
        : null;
});
const CopyToClipboard = { Root };

exports.CopyToClipboard = CopyToClipboard;
exports.Root = Root;
//# sourceMappingURL=copy-to-clipboard.js.map
