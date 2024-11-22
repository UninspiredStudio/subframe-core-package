"use client";
import classNames from "classnames";
import * as React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { CartesianGrid as RechartsCartesianGrid, Label as RechartsLabel, Legend as RechartsLegend, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis, } from "recharts";
import styles from "./charts.module.css";
/**
 * Colors
 */
/* Default palette is Blue */
export const DEFAULT_COLORS = ["3b82f6", "bfdbfe", "2563eb", "93c5fd", "1d4ed8", "60a5fa"];
export function createColorMap({ categories, colors }) {
    const colorMap = new Map();
    for (let i = 0; i < categories.length; i++) {
        colorMap.set(categories[i], colors[i % colors.length]);
    }
    return colorMap;
}
const ChartContext = React.createContext(undefined);
export function ChartContextProvider({ categories, colors, dark, children, }) {
    const value = React.useMemo(() => ({ colorMap: createColorMap({ categories, colors }), dark }), [categories, colors, dark]);
    return React.createElement(ChartContext.Provider, { value: value }, children);
}
export function useChartContext() {
    return React.useContext(ChartContext);
}
export const AutoSizedChartWrapper = React.forwardRef(function AutoSizedChartWrapper({ className, style, children, ...props }, ref) {
    return (React.createElement("div", { className: classNames(className, styles.root), ref: ref, ...props, style: { ...style, minHeight: 200, minWidth: 300 } },
        React.createElement(AutoSizer, null, ({ height, width }) => children({ height, width }))));
});
/**
 * Recharts Wrappers
 */
export const ChartLabel = RechartsLabel;
export const CartesianGrid = ({ ref, className, horizontal = true, vertical = false, strokeWidth = 1, ...otherProps }) => {
    const { dark } = useChartContext();
    return (React.createElement(RechartsCartesianGrid, { className: classNames(className, styles.grid, { [styles.dark]: dark }), horizontal: horizontal, vertical: vertical, strokeWidth: strokeWidth, ref: ref, ...otherProps }));
};
CartesianGrid.displayName = RechartsCartesianGrid.displayName;
export const XAxis = ({ ref, ...otherProps }) => {
    return React.createElement(RechartsXAxis, { ref: ref, ...otherProps });
};
XAxis.displayName = RechartsXAxis.displayName;
XAxis.defaultProps = {
    ...RechartsXAxis.defaultProps,
    axisLine: false,
    tickLine: false,
    padding: { left: 20, right: 20 },
    interval: "equidistantPreserveStart",
};
export const YAxis = ({ ref, ...otherProps }) => {
    return React.createElement(RechartsYAxis, { ref: ref, ...otherProps });
};
YAxis.displayName = RechartsYAxis.displayName;
YAxis.defaultProps = { ...RechartsYAxis.defaultProps, axisLine: false, tickLine: false, width: 40 };
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
export const ChartTooltip = (props) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(RechartsTooltip, { content: ({ active, payload, label }) => (React.createElement(DefaultTooltip, { active: active, colorMap: colorMap, dark: dark, label: label, payload: payload })), ...props }));
};
ChartTooltip.displayName = RechartsTooltip.displayName;
ChartTooltip.defaultProps = {
    ...RechartsTooltip.defaultProps,
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
export const ChartLegend = ({ ref, ...otherProps }) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(RechartsLegend, { content: ({ payload }) => (React.createElement(DefaultLegend, { align: otherProps.align, colorMap: colorMap, dark: dark, payload: payload })), ref: ref, ...otherProps }));
};
ChartLegend.displayName = RechartsLegend.displayName;
ChartLegend.defaultProps = { ...RechartsLegend.defaultProps, align: "right", verticalAlign: "top" };
