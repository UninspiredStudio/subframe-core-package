"use client";
'use strict';

var React = require('react');
var recharts = require('recharts');
var charts = require('./charts.js');

const BarChart = React.forwardRef(function BarChart({ categories, colors = charts.DEFAULT_COLORS, dark, data, index, stacked, gridLines = React.createElement(charts.CartesianGrid, null), xAxis = React.createElement(charts.XAxis, { dataKey: index }), yAxis = React.createElement(charts.YAxis, null), tooltip = React.createElement(charts.ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }), legend = React.createElement(charts.ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (React.createElement(recharts.Bar, { key: index, dataKey: category, fill: color, stackId: stacked ? "a" : undefined, isAnimationActive: false }));
}), layout, syncId, margin, barCategoryGap, barGap, barSize, maxBarSize, stackOffset, reverseStackOrder, ...otherProps }, ref) {
    return (React.createElement(charts.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(recharts.BarChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, barCategoryGap: barCategoryGap, barGap: barGap, barSize: barSize, maxBarSize: maxBarSize, stackOffset: stackOffset, reverseStackOrder: reverseStackOrder },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

exports.BarChart = BarChart;
//# sourceMappingURL=bar-chart.js.map
