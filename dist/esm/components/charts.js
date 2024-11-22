"use client";
import classNames from 'classnames';
import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { CartesianGrid as CartesianGrid$1, XAxis as XAxis$1, YAxis as YAxis$1, Tooltip, Legend, Label } from 'recharts';
import styles from './charts.module.css.js';

/**
 * Colors
 */
/* Default palette is Blue */
const DEFAULT_COLORS = ["3b82f6", "bfdbfe", "2563eb", "93c5fd", "1d4ed8", "60a5fa"];
function createColorMap({ categories, colors }) {
    const colorMap = new Map();
    for (let i = 0; i < categories.length; i++) {
        colorMap.set(categories[i], colors[i % colors.length]);
    }
    return colorMap;
}
const ChartContext = React.createContext(undefined);
function ChartContextProvider({ categories, colors, dark, children, }) {
    const value = React.useMemo(() => ({ colorMap: createColorMap({ categories, colors }), dark }), [categories, colors, dark]);
    return React.createElement(ChartContext.Provider, { value: value }, children);
}
function useChartContext() {
    return React.useContext(ChartContext);
}
const AutoSizedChartWrapper = React.forwardRef(function AutoSizedChartWrapper({ className, style, children, ...props }, ref) {
    return (React.createElement("div", { className: classNames(className, styles.root), ref: ref, ...props, style: { ...style, minHeight: 200, minWidth: 300 } },
        React.createElement(AutoSizer, null, ({ height, width }) => children({ height, width }))));
});
/**
 * Recharts Wrappers
 */
const ChartLabel = Label;
const CartesianGrid = ({ ref, className, horizontal = true, vertical = false, strokeWidth = 1, ...otherProps }) => {
    const { dark } = useChartContext();
    return (React.createElement(CartesianGrid$1, { className: classNames(className, styles.grid, { [styles.dark]: dark }), horizontal: horizontal, vertical: vertical, strokeWidth: strokeWidth, ref: ref, ...otherProps }));
};
CartesianGrid.displayName = CartesianGrid$1.displayName;
const XAxis = ({ ref, ...otherProps }) => {
    return React.createElement(XAxis$1, { ref: ref, ...otherProps });
};
XAxis.displayName = XAxis$1.displayName;
XAxis.defaultProps = {
    ...XAxis$1.defaultProps,
    axisLine: false,
    tickLine: false,
    padding: { left: 20, right: 20 },
    interval: "equidistantPreserveStart",
};
const YAxis = ({ ref, ...otherProps }) => {
    return React.createElement(YAxis$1, { ref: ref, ...otherProps });
};
YAxis.displayName = YAxis$1.displayName;
YAxis.defaultProps = { ...YAxis$1.defaultProps, axisLine: false, tickLine: false, width: 40 };
function DefaultTooltip({ active, colorMap, dark, payload, label }) {
    if (active && payload && payload.length) {
        return (React.createElement("div", { className: classNames(styles.tooltip, { [styles.dark]: dark }) },
            label ? React.createElement("div", null, label) : null,
            payload.map(({ name, value }, index) => (React.createElement("div", { className: styles.row, key: index },
                React.createElement("span", { className: styles.dot, style: { backgroundColor: colorMap.get(String(name)) } }),
                React.createElement("span", { className: styles.name }, name ?? ""),
                React.createElement("span", { className: styles.value }, value))))));
    }
    return null;
}
const ChartTooltip = (props) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(Tooltip, { content: ({ active, payload, label }) => (React.createElement(DefaultTooltip, { active: active, colorMap: colorMap, dark: dark, label: label, payload: payload })), ...props }));
};
ChartTooltip.displayName = Tooltip.displayName;
ChartTooltip.defaultProps = {
    ...Tooltip.defaultProps,
    cursor: { stroke: "#D1D5DB", strokeWidth: 1 },
    isAnimationActive: false,
};
function DefaultLegend({ align, colorMap, dark, payload }) {
    return (React.createElement("div", { className: classNames(styles.legend, {
            [styles.dark]: dark,
            [styles.left]: align === "left",
            [styles.center]: align === "center",
            [styles.right]: align === "right",
        }) }, payload.map(({ value }, index) => (React.createElement("div", { className: styles.row, key: index },
        React.createElement("span", { className: styles.dot, style: { backgroundColor: colorMap.get(String(value)) } }),
        React.createElement("span", { className: styles.name }, value))))));
}
const ChartLegend = ({ ref, ...otherProps }) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(Legend, { content: ({ payload }) => (React.createElement(DefaultLegend, { align: otherProps.align, colorMap: colorMap, dark: dark, payload: payload })), ref: ref, ...otherProps }));
};
ChartLegend.displayName = Legend.displayName;
ChartLegend.defaultProps = { ...Legend.defaultProps, align: "right", verticalAlign: "top" };

export { AutoSizedChartWrapper, CartesianGrid, ChartContextProvider, ChartLabel, ChartLegend, ChartTooltip, DEFAULT_COLORS, XAxis, YAxis, createColorMap, useChartContext };
//# sourceMappingURL=charts.js.map
