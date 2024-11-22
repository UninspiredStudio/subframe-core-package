"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChart = void 0;
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const charts_1 = require("./charts");
exports.BarChart = react_1.default.forwardRef(function BarChart({ categories, colors = charts_1.DEFAULT_COLORS, dark, data, index, stacked, gridLines = react_1.default.createElement(charts_1.CartesianGrid, null), xAxis = react_1.default.createElement(charts_1.XAxis, { dataKey: index }), yAxis = react_1.default.createElement(charts_1.YAxis, null), tooltip = react_1.default.createElement(charts_1.ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }), legend = react_1.default.createElement(charts_1.ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (react_1.default.createElement(recharts_1.Bar, { key: index, dataKey: category, fill: color, stackId: stacked ? "a" : undefined, isAnimationActive: false }));
}), layout, syncId, margin, barCategoryGap, barGap, barSize, maxBarSize, stackOffset, reverseStackOrder, ...otherProps }, ref) {
    return (react_1.default.createElement(charts_1.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        react_1.default.createElement(charts_1.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (react_1.default.createElement(recharts_1.BarChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, barCategoryGap: barCategoryGap, barGap: barGap, barSize: barSize, maxBarSize: maxBarSize, stackOffset: stackOffset, reverseStackOrder: reverseStackOrder },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});
