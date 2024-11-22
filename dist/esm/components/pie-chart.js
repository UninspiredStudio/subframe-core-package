"use client";
import classNames from "classnames";
import React from "react";
import { Cell, Pie, PieChart as RechartsPieChart } from "recharts";
import { AutoSizedChartWrapper, ChartContextProvider, ChartLegend, ChartTooltip, DEFAULT_COLORS } from "./charts";
import styles from "./pie-chart.module.css";
export const PieChart = React.forwardRef(function PieChart({ className, category, colors = DEFAULT_COLORS, dark, data, index, tooltip = React.createElement(ChartTooltip, null), legend = React.createElement(ChartLegend, null), children = (React.createElement(Pie, { className: classNames(styles.pie, { [styles.dark]: dark }), data: data, cx: "50%", cy: "50%", startAngle: 90, endAngle: -270, innerRadius: "75%", isAnimationActive: false, outerRadius: "100%", dataKey: category, nameKey: index }, data.map((_, index) => {
    return React.createElement(Cell, { key: index, fill: colors[index % colors.length] });
}))), margin, ...otherProps }, ref) {
    return (React.createElement(ChartContextProvider, { categories: data.map((obj) => obj[index]), colors: colors, dark: dark },
        React.createElement(AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (React.createElement(RechartsPieChart, { data: data, height: height, width: width, margin: margin },
            tooltip,
            legend,
            children)))));
});
