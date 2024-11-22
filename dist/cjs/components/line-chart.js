"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChart = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const charts_1 = require("./charts");
const line_chart_module_css_1 = __importDefault(require("./line-chart.module.css"));
exports.LineChart = react_1.default.forwardRef(function LineChart({ categories, colors = charts_1.DEFAULT_COLORS, dark, data, index, gridLines = react_1.default.createElement(charts_1.CartesianGrid, null), xAxis = react_1.default.createElement(charts_1.XAxis, { dataKey: index }), yAxis = react_1.default.createElement(charts_1.YAxis, null), tooltip = react_1.default.createElement(charts_1.ChartTooltip, null), legend = react_1.default.createElement(charts_1.ChartLegend, null), children = categories.map((category, index) => {
    const color = colors[index % colors.length];
    return (react_1.default.createElement(recharts_1.Line, { key: index, type: "monotone", activeDot: (props) => (react_1.default.createElement(recharts_1.Dot, { className: (0, classnames_1.default)(line_chart_module_css_1.default.dot, { [line_chart_module_css_1.default.dark]: dark }), r: 5, style: { fill: color }, ...props })), dot: false, dataKey: category, fill: color, isAnimationActive: false, stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }));
}), layout, syncId, margin, ...otherProps }, ref) {
    return (react_1.default.createElement(charts_1.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        react_1.default.createElement(charts_1.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (react_1.default.createElement(recharts_1.LineChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});
