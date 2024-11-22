"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaChart = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const area_chart_module_css_1 = __importDefault(require("./area-chart.module.css"));
const charts_1 = require("./charts");
exports.AreaChart = react_1.default.forwardRef(function AreaChart({ categories, colors = charts_1.DEFAULT_COLORS, dark, data, index, gridLines = react_1.default.createElement(charts_1.CartesianGrid, null), xAxis = react_1.default.createElement(charts_1.XAxis, { dataKey: index }), yAxis = react_1.default.createElement(charts_1.YAxis, null), tooltip = react_1.default.createElement(charts_1.ChartTooltip, null), legend = react_1.default.createElement(charts_1.ChartLegend, null), children = (react_1.default.createElement(react_1.default.Fragment, null,
    categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (react_1.default.createElement("defs", { key: category },
            react_1.default.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" },
                react_1.default.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }),
                react_1.default.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 }))));
    }),
    categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (react_1.default.createElement(recharts_1.Area, { key: index, type: "monotone", activeDot: (props) => {
                const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
                return (react_1.default.createElement(recharts_1.Dot, { className: (0, classnames_1.default)(area_chart_module_css_1.default.dot, { [area_chart_module_css_1.default.dark]: dark }), cx: cx, cy: cy, r: 5, fill: color, stroke: stroke, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth }));
            }, dataKey: category, fill: `url(#${color})`, isAnimationActive: false, stackId: "a", stroke: color, strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: 2 }));
    }))), layout, syncId, margin, stackOffset, ...otherProps }, ref) {
    return (react_1.default.createElement(charts_1.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        react_1.default.createElement(charts_1.AutoSizedChartWrapper, { ref: ref, ...otherProps }, ({ height, width }) => (react_1.default.createElement(recharts_1.AreaChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, stackOffset: stackOffset },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});
