"use client";
import classNames from "classnames";
import React from "react";
import { Dot, Line, LineChart as RechartsLineChart } from "recharts";
import { AutoSizedChartWrapper, CartesianGrid, ChartContextProvider, ChartLegend, ChartTooltip, DEFAULT_COLORS, XAxis, YAxis, } from "./charts";
import styles from "./line-chart.module.css";
export const LineChart = React.forwardRef(function LineChart({ categories, colors = DEFAULT_COLORS, dark, data, index, gridLines = React.createElement(CartesianGrid, null), xAxis = React.createElement(XAxis, { dataKey: index }), yAxis = React.createElement(YAxis, null), tooltip = React.createElement(ChartTooltip, null), legend = React.createElement(ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (React.createElement(Line, { key: index, type: "monotone", activeDot: (props) => (React.createElement(Dot, { className: classNames(styles.dot, { [styles.dark]: dark }), r: 5, style: { fill: color }, ...props })), dot: false, dataKey: category, fill: color, isAnimationActive: false, stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }));
}), layout, syncId, margin, ...otherProps }, ref) {
    return (React.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(RechartsLineChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});
