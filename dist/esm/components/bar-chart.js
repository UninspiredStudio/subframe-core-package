"use client";
import React__default from 'react';
import { BarChart as BarChart$1, Bar } from 'recharts';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend } from './charts.js';

const BarChart = React__default.forwardRef(function BarChart({ categories, colors = DEFAULT_COLORS, dark, data, index, stacked, gridLines = React__default.createElement(CartesianGrid, null), xAxis = React__default.createElement(XAxis, { dataKey: index }), yAxis = React__default.createElement(YAxis, null), tooltip = React__default.createElement(ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }), legend = React__default.createElement(ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (React__default.createElement(Bar, { key: index, dataKey: category, fill: color, stackId: stacked ? "a" : undefined, isAnimationActive: false }));
}), layout, syncId, margin, barCategoryGap, barGap, barSize, maxBarSize, stackOffset, reverseStackOrder, ...otherProps }, ref) {
    return (React__default.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React__default.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React__default.createElement(BarChart$1, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, barCategoryGap: barCategoryGap, barGap: barGap, barSize: barSize, maxBarSize: maxBarSize, stackOffset: stackOffset, reverseStackOrder: reverseStackOrder },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

export { BarChart };
//# sourceMappingURL=bar-chart.js.map
