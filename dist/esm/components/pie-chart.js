"use client";
import classNames from 'classnames';
import React__default from 'react';
import { PieChart as PieChart$1, Pie, Cell } from 'recharts';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, ChartTooltip, ChartLegend } from './charts.js';
import styles from './pie-chart.module.css.js';

const PieChart = React__default.forwardRef(function PieChart({ className, category, colors = DEFAULT_COLORS, dark, data, index, tooltip = React__default.createElement(ChartTooltip, null), legend = React__default.createElement(ChartLegend, null), children = (React__default.createElement(Pie, { className: classNames(styles.pie, { [styles.dark]: dark }), data: data, cx: "50%", cy: "50%", startAngle: 90, endAngle: -270, innerRadius: "75%", isAnimationActive: false, outerRadius: "100%", dataKey: category, nameKey: index }, data.map((_, index) => {
    return React__default.createElement(Cell, { key: index, fill: colors[index % colors.length] });
}))), margin, ...otherProps }, ref) {
    return (React__default.createElement(ChartContextProvider, { categories: data.map((obj) => obj[index]), colors: colors, dark: dark },
        React__default.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React__default.createElement(PieChart$1, { data: data, height: height, width: width, margin: margin },
            tooltip,
            legend,
            children)))));
});

export { PieChart };
//# sourceMappingURL=pie-chart.js.map
