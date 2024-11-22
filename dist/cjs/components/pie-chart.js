"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChart = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const charts_1 = require("./charts");
const pie_chart_module_css_1 = __importDefault(require("./pie-chart.module.css"));
exports.PieChart = react_1.default.forwardRef(function PieChart({ className, category, colors = charts_1.DEFAULT_COLORS, dark, data, index, tooltip = react_1.default.createElement(charts_1.ChartTooltip, null), legend = react_1.default.createElement(charts_1.ChartLegend, null), children = (react_1.default.createElement(recharts_1.Pie, { className: (0, classnames_1.default)(pie_chart_module_css_1.default.pie, { [pie_chart_module_css_1.default.dark]: dark }), data: data, cx: "50%", cy: "50%", startAngle: 90, endAngle: -270, innerRadius: "75%", isAnimationActive: false, outerRadius: "100%", dataKey: category, nameKey: index }, data.map((_, index) => {
    return react_1.default.createElement(recharts_1.Cell, { key: index, fill: colors[index % colors.length] });
}))), margin, ...otherProps }, ref) {
    return (react_1.default.createElement(charts_1.ChartContextProvider, { categories: data.map((obj) => obj[index]), colors: colors, dark: dark },
        react_1.default.createElement(charts_1.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (react_1.default.createElement(recharts_1.PieChart, { data: data, height: height, width: width, margin: margin },
            tooltip,
            legend,
            children)))));
});
