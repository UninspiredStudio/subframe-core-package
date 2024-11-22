"use client";
import classNames from 'classnames';
import React__default from 'react';
import { LineChart as LineChart$1, Line, Dot } from 'recharts';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend } from './charts.js';
import styles from './line-chart.module.css.js';

const LineChart = React__default.forwardRef(function LineChart({ categories, colors = DEFAULT_COLORS, dark, data, index, gridLines = React__default.createElement(CartesianGrid, null), xAxis = React__default.createElement(XAxis, { dataKey: index }), yAxis = React__default.createElement(YAxis, null), tooltip = React__default.createElement(ChartTooltip, null), legend = React__default.createElement(ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (React__default.createElement(Line, { key: index, type: "monotone", activeDot: (props) => (React__default.createElement(Dot, { className: classNames(styles.dot, { [styles.dark]: dark }), r: 5, style: { fill: color }, ...props })), dot: false, dataKey: category, fill: color, isAnimationActive: false, stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }));
}), layout, syncId, margin, ...otherProps }, ref) {
    return (React__default.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React__default.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React__default.createElement(LineChart$1, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

export { LineChart };
//# sourceMappingURL=line-chart.js.map
