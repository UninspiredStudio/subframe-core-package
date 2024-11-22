"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var recharts = require('recharts');
var charts = require('./charts.js');
var pieChart_module = require('./pie-chart.module.css.js');

const PieChart = React.forwardRef(function PieChart({ className, category, colors = charts.DEFAULT_COLORS, dark, data, index, tooltip = React.createElement(charts.ChartTooltip, null), legend = React.createElement(charts.ChartLegend, null), children = (React.createElement(recharts.Pie, { className: classNames(pieChart_module.pie, { [pieChart_module.dark]: dark }), data: data, cx: "50%", cy: "50%", startAngle: 90, endAngle: -270, innerRadius: "75%", isAnimationActive: false, outerRadius: "100%", dataKey: category, nameKey: index }, data.map((_, index) => {
    return React.createElement(recharts.Cell, { key: index, fill: colors[index % colors.length] });
}))), margin, ...otherProps }, ref) {
    return (React.createElement(charts.ChartContextProvider, { categories: data.map((obj) => obj[index]), colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(recharts.PieChart, { data: data, height: height, width: width, margin: margin },
            tooltip,
            legend,
            children)))));
});

exports.PieChart = PieChart;
//# sourceMappingURL=pie-chart.js.map
