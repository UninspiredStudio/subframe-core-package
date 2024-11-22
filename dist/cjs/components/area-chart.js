"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var recharts = require('recharts');
var areaChart_module = require('./area-chart.module.css.js');
var charts = require('./charts.js');

const AreaChart = React.forwardRef(function AreaChart({ categories, colors = charts.DEFAULT_COLORS, dark, data, index, gridLines = React.createElement(charts.CartesianGrid, null), xAxis = React.createElement(charts.XAxis, { dataKey: index }), yAxis = React.createElement(charts.YAxis, null), tooltip = React.createElement(charts.ChartTooltip, null), legend = React.createElement(charts.ChartLegend, null), children = (React.createElement(React.Fragment, null,
    categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (React.createElement("defs", { key: category },
            React.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" },
                React.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }),
                React.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 }))));
    }),
    categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (React.createElement(recharts.Area, { key: index, type: "monotone", activeDot: (props) => {
                const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
                return (React.createElement(recharts.Dot, { className: classNames(areaChart_module.dot, { [areaChart_module.dark]: dark }), cx: cx, cy: cy, r: 5, fill: color, stroke: stroke, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth }));
            }, dataKey: category, fill: `url(#${color})`, isAnimationActive: false, stackId: "a", stroke: color, strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: 2 }));
    }))), layout, syncId, margin, stackOffset, ...otherProps }, ref) {
    return (React.createElement(charts.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(recharts.AreaChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, stackOffset: stackOffset },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

exports.AreaChart = AreaChart;
//# sourceMappingURL=area-chart.js.map
