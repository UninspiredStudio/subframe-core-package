"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var AutoSizer = require('react-virtualized-auto-sizer');
var recharts = require('recharts');
var charts_module = require('./charts.module.css.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const DEFAULT_COLORS = ["3b82f6", "bfdbfe", "2563eb", "93c5fd", "1d4ed8", "60a5fa"];
function createColorMap({ categories, colors }) {
  const colorMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < categories.length; i++) {
    colorMap.set(categories[i], colors[i % colors.length]);
  }
  return colorMap;
}
const ChartContext = React__namespace.createContext(void 0);
function ChartContextProvider({
  categories,
  colors,
  dark,
  children
}) {
  const value = React__namespace.useMemo(
    () => ({ colorMap: createColorMap({ categories, colors }), dark }),
    [categories, colors, dark]
  );
  return /* @__PURE__ */ React__namespace.createElement(ChartContext.Provider, { value }, children);
}
function useChartContext() {
  return React__namespace.useContext(ChartContext);
}
const AutoSizedChartWrapper = React__namespace.forwardRef(function AutoSizedChartWrapper2({ className, style, children, ...props }, ref) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      className: classNames(className, charts_module.root),
      ref,
      ...props,
      style: { ...style, minHeight: 200, minWidth: 300 }
    },
    /* @__PURE__ */ React__namespace.createElement(AutoSizer, null, ({ height, width }) => children({ height, width }))
  );
});
const ChartLabel = recharts.Label;
const CartesianGrid = ({
  ref,
  className,
  horizontal = true,
  vertical = false,
  strokeWidth = 1,
  ...otherProps
}) => {
  const { dark } = useChartContext();
  return /* @__PURE__ */ React__namespace.createElement(
    recharts.CartesianGrid,
    {
      className: classNames(className, charts_module.grid, { [charts_module.dark]: dark }),
      horizontal,
      vertical,
      strokeWidth,
      ref,
      ...otherProps
    }
  );
};
CartesianGrid.displayName = recharts.CartesianGrid.displayName;
const XAxis = ({ ref, ...otherProps }) => {
  return /* @__PURE__ */ React__namespace.createElement(recharts.XAxis, { ref, ...otherProps });
};
XAxis.displayName = recharts.XAxis.displayName;
XAxis.defaultProps = {
  ...recharts.XAxis.defaultProps,
  axisLine: false,
  tickLine: false,
  padding: { left: 20, right: 20 },
  interval: "equidistantPreserveStart"
};
const YAxis = ({ ref, ...otherProps }) => {
  return /* @__PURE__ */ React__namespace.createElement(recharts.YAxis, { ref, ...otherProps });
};
YAxis.displayName = recharts.YAxis.displayName;
YAxis.defaultProps = { ...recharts.YAxis.defaultProps, axisLine: false, tickLine: false, width: 40 };
function DefaultTooltip({ active, colorMap, dark, payload, label }) {
  if (active && payload && payload.length) {
    return /* @__PURE__ */ React__namespace.createElement("div", { className: classNames(charts_module.tooltip, { [charts_module.dark]: dark }) }, label ? /* @__PURE__ */ React__namespace.createElement("div", null, label) : null, payload.map(({ name, value }, index) => /* @__PURE__ */ React__namespace.createElement("div", { className: charts_module.row, key: index }, /* @__PURE__ */ React__namespace.createElement("span", { className: charts_module.dot, style: { backgroundColor: colorMap.get(String(name)) } }), /* @__PURE__ */ React__namespace.createElement("span", { className: charts_module.name }, name ?? ""), /* @__PURE__ */ React__namespace.createElement("span", { className: charts_module.value }, value))));
  }
  return null;
}
const ChartTooltip = (props) => {
  const { colorMap, dark } = useChartContext();
  return /* @__PURE__ */ React__namespace.createElement(
    recharts.Tooltip,
    {
      content: ({ active, payload, label }) => /* @__PURE__ */ React__namespace.createElement(DefaultTooltip, { active, colorMap, dark, label, payload }),
      ...props
    }
  );
};
ChartTooltip.displayName = recharts.Tooltip.displayName;
ChartTooltip.defaultProps = {
  ...recharts.Tooltip.defaultProps,
  cursor: { stroke: "#D1D5DB", strokeWidth: 1 },
  isAnimationActive: false
};
function DefaultLegend({ align, colorMap, dark, payload }) {
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      className: classNames(charts_module.legend, {
        [charts_module.dark]: dark,
        [charts_module.left]: align === "left",
        [charts_module.center]: align === "center",
        [charts_module.right]: align === "right"
      })
    },
    payload.map(({ value }, index) => /* @__PURE__ */ React__namespace.createElement("div", { className: charts_module.row, key: index }, /* @__PURE__ */ React__namespace.createElement("span", { className: charts_module.dot, style: { backgroundColor: colorMap.get(String(value)) } }), /* @__PURE__ */ React__namespace.createElement("span", { className: charts_module.name }, value)))
  );
}
const ChartLegend = ({ ref, ...otherProps }) => {
  const { colorMap, dark } = useChartContext();
  return /* @__PURE__ */ React__namespace.createElement(
    recharts.Legend,
    {
      content: ({ payload }) => /* @__PURE__ */ React__namespace.createElement(DefaultLegend, { align: otherProps.align, colorMap, dark, payload }),
      ref,
      ...otherProps
    }
  );
};
ChartLegend.displayName = recharts.Legend.displayName;
ChartLegend.defaultProps = { ...recharts.Legend.defaultProps, align: "right", verticalAlign: "top" };

exports.AutoSizedChartWrapper = AutoSizedChartWrapper;
exports.CartesianGrid = CartesianGrid;
exports.ChartContextProvider = ChartContextProvider;
exports.ChartLabel = ChartLabel;
exports.ChartLegend = ChartLegend;
exports.ChartTooltip = ChartTooltip;
exports.DEFAULT_COLORS = DEFAULT_COLORS;
exports.XAxis = XAxis;
exports.YAxis = YAxis;
exports.createColorMap = createColorMap;
exports.useChartContext = useChartContext;
//# sourceMappingURL=charts.js.map
