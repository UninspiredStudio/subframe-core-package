"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartLegend = exports.ChartTooltip = exports.YAxis = exports.XAxis = exports.CartesianGrid = exports.ChartLabel = exports.AutoSizedChartWrapper = exports.DEFAULT_COLORS = void 0;
exports.createColorMap = createColorMap;
exports.ChartContextProvider = ChartContextProvider;
exports.useChartContext = useChartContext;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_virtualized_auto_sizer_1 = __importDefault(require("react-virtualized-auto-sizer"));
const recharts_1 = require("recharts");
const charts_module_css_1 = __importDefault(require("./charts.module.css"));
/**
 * Colors
 */
/* Default palette is Blue */
exports.DEFAULT_COLORS = ["3b82f6", "bfdbfe", "2563eb", "93c5fd", "1d4ed8", "60a5fa"];
function createColorMap({ categories, colors }) {
    const colorMap = new Map();
    for (let i = 0; i < categories.length; i++) {
        colorMap.set(categories[i], colors[i % colors.length]);
    }
    return colorMap;
}
const ChartContext = React.createContext(undefined);
function ChartContextProvider({ categories, colors, dark, children, }) {
    const value = React.useMemo(() => ({ colorMap: createColorMap({ categories, colors }), dark }), [categories, colors, dark]);
    return React.createElement(ChartContext.Provider, { value: value }, children);
}
function useChartContext() {
    return React.useContext(ChartContext);
}
exports.AutoSizedChartWrapper = React.forwardRef(function AutoSizedChartWrapper({ className, style, children, ...props }, ref) {
    return (React.createElement("div", { className: (0, classnames_1.default)(className, charts_module_css_1.default.root), ref: ref, ...props, style: { ...style, minHeight: 200, minWidth: 300 } },
        React.createElement(react_virtualized_auto_sizer_1.default, null, ({ height, width }) => children({ height, width }))));
});
/**
 * Recharts Wrappers
 */
exports.ChartLabel = recharts_1.Label;
const CartesianGrid = ({ ref, className, horizontal = true, vertical = false, strokeWidth = 1, ...otherProps }) => {
    const { dark } = useChartContext();
    return (React.createElement(recharts_1.CartesianGrid, { className: (0, classnames_1.default)(className, charts_module_css_1.default.grid, { [charts_module_css_1.default.dark]: dark }), horizontal: horizontal, vertical: vertical, strokeWidth: strokeWidth, ref: ref, ...otherProps }));
};
exports.CartesianGrid = CartesianGrid;
exports.CartesianGrid.displayName = recharts_1.CartesianGrid.displayName;
const XAxis = ({ ref, ...otherProps }) => {
    return React.createElement(recharts_1.XAxis, { ref: ref, ...otherProps });
};
exports.XAxis = XAxis;
exports.XAxis.displayName = recharts_1.XAxis.displayName;
exports.XAxis.defaultProps = {
    ...recharts_1.XAxis.defaultProps,
    axisLine: false,
    tickLine: false,
    padding: { left: 20, right: 20 },
    interval: "equidistantPreserveStart",
};
const YAxis = ({ ref, ...otherProps }) => {
    return React.createElement(recharts_1.YAxis, { ref: ref, ...otherProps });
};
exports.YAxis = YAxis;
exports.YAxis.displayName = recharts_1.YAxis.displayName;
exports.YAxis.defaultProps = { ...recharts_1.YAxis.defaultProps, axisLine: false, tickLine: false, width: 40 };
function DefaultTooltip({ active, colorMap, dark, payload, label }) {
    if (active && payload && payload.length) {
        return (React.createElement("div", { className: (0, classnames_1.default)(charts_module_css_1.default.tooltip, { [charts_module_css_1.default.dark]: dark }) },
            label ? React.createElement("div", null, label) : null,
            payload.map(({ name, value }, index) => (React.createElement("div", { className: charts_module_css_1.default.row, key: index },
                React.createElement("span", { className: charts_module_css_1.default.dot, style: { backgroundColor: colorMap.get(String(name)) } }),
                React.createElement("span", { className: charts_module_css_1.default.name }, name ?? ""),
                React.createElement("span", { className: charts_module_css_1.default.value }, value))))));
    }
    return null;
}
const ChartTooltip = (props) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(recharts_1.Tooltip, { content: ({ active, payload, label }) => (React.createElement(DefaultTooltip, { active: active, colorMap: colorMap, dark: dark, label: label, payload: payload })), ...props }));
};
exports.ChartTooltip = ChartTooltip;
exports.ChartTooltip.displayName = recharts_1.Tooltip.displayName;
exports.ChartTooltip.defaultProps = {
    ...recharts_1.Tooltip.defaultProps,
    cursor: { stroke: "#D1D5DB", strokeWidth: 1 },
    isAnimationActive: false,
};
function DefaultLegend({ align, colorMap, dark, payload }) {
    return (React.createElement("div", { className: (0, classnames_1.default)(charts_module_css_1.default.legend, {
            [charts_module_css_1.default.dark]: dark,
            [charts_module_css_1.default.left]: align === "left",
            [charts_module_css_1.default.center]: align === "center",
            [charts_module_css_1.default.right]: align === "right",
        }) }, payload.map(({ value }, index) => (React.createElement("div", { className: charts_module_css_1.default.row, key: index },
        React.createElement("span", { className: charts_module_css_1.default.dot, style: { backgroundColor: colorMap.get(String(value)) } }),
        React.createElement("span", { className: charts_module_css_1.default.name }, value))))));
}
const ChartLegend = ({ ref, ...otherProps }) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(recharts_1.Legend, { content: ({ payload }) => (React.createElement(DefaultLegend, { align: otherProps.align, colorMap: colorMap, dark: dark, payload: payload })), ref: ref, ...otherProps }));
};
exports.ChartLegend = ChartLegend;
exports.ChartLegend.displayName = recharts_1.Legend.displayName;
exports.ChartLegend.defaultProps = { ...recharts_1.Legend.defaultProps, align: "right", verticalAlign: "top" };
