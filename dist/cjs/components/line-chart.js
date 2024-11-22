"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var recharts = require('recharts');
var charts = require('./charts.js');
var lineChart_module = require('./line-chart.module.css.js');

const LineChart = React.forwardRef(function LineChart({ categories, colors = charts.DEFAULT_COLORS, dark, data, index, gridLines = React.createElement(charts.CartesianGrid, null), xAxis = React.createElement(charts.XAxis, { dataKey: index }), yAxis = React.createElement(charts.YAxis, null), tooltip = React.createElement(charts.ChartTooltip, null), legend = React.createElement(charts.ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (React.createElement(recharts.Line, { key: index, type: "monotone", activeDot: (props) => (React.createElement(recharts.Dot, { className: classNames(lineChart_module.dot, { [lineChart_module.dark]: dark }), r: 5, style: { fill: color }, ...props })), dot: false, dataKey: category, fill: color, isAnimationActive: false, stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }));
}), layout, syncId, margin, ...otherProps }, ref) {
    return (React.createElement(charts.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(recharts.LineChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

exports.LineChart = LineChart;
//# sourceMappingURL=line-chart.js.map
