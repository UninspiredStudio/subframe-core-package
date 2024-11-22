"use client";
import React from "react";
import { Bar, BarChart as RechartsBarChart } from "recharts";
import { AutoSizedChartWrapper, CartesianGrid, ChartContextProvider, ChartLegend, ChartTooltip, DEFAULT_COLORS, XAxis, YAxis, } from "./charts";
export const BarChart = React.forwardRef(function BarChart({ categories, colors = DEFAULT_COLORS, dark, data, index, stacked, gridLines = React.createElement(CartesianGrid, null), xAxis = React.createElement(XAxis, { dataKey: index }), yAxis = React.createElement(YAxis, null), tooltip = React.createElement(ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }), legend = React.createElement(ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (React.createElement(Bar, { key: index, dataKey: category, fill: color, stackId: stacked ? "a" : undefined, isAnimationActive: false }));
}), layout, syncId, margin, barCategoryGap, barGap, barSize, maxBarSize, stackOffset, reverseStackOrder, ...otherProps }, ref) {
    return (React.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(RechartsBarChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, barCategoryGap: barCategoryGap, barGap: barGap, barSize: barSize, maxBarSize: maxBarSize, stackOffset: stackOffset, reverseStackOrder: reverseStackOrder },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});
