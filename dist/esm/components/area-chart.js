"use client";
import classNames from "classnames";
import React from "react";
import { Area, AreaChart as RechartsAreaChart, Dot } from "recharts";
import styles from "./area-chart.module.css";
import { AutoSizedChartWrapper, CartesianGrid, ChartContextProvider, ChartLegend, ChartTooltip, DEFAULT_COLORS, XAxis, YAxis, } from "./charts";
export const AreaChart = React.forwardRef(function AreaChart({ categories, colors = DEFAULT_COLORS, dark, data, index, gridLines = React.createElement(CartesianGrid, null), xAxis = React.createElement(XAxis, { dataKey: index }), yAxis = React.createElement(YAxis, null), tooltip = React.createElement(ChartTooltip, null), legend = React.createElement(ChartLegend, null), children = (React.createElement(React.Fragment, null,
    categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (React.createElement("defs", { key: category },
            React.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" },
                React.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }),
                React.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 }))));
    }),
    categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (React.createElement(Area, { key: index, type: "monotone", activeDot: (props) => {
                const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
                return (React.createElement(Dot, { className: classNames(styles.dot, { [styles.dark]: dark }), cx: cx, cy: cy, r: 5, fill: color, stroke: stroke, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth }));
            }, dataKey: category, fill: `url(#${color})`, isAnimationActive: false, stackId: "a", stroke: color, strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: 2 }));
    }))), layout, syncId, margin, stackOffset, ...otherProps }, ref) {
    return (React.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(RechartsAreaChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, stackOffset: stackOffset },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});
