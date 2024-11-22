"use strict";
"use client";
'use strict';

var React = require('react');
var recharts = require('recharts');
var charts = require('./charts.js');

const BarChart = React.forwardRef(function BarChart2({
  categories,
  colors = charts.DEFAULT_COLORS,
  dark,
  data,
  index,
  stacked,
  gridLines = /* @__PURE__ */ React.createElement(charts.CartesianGrid, null),
  xAxis = /* @__PURE__ */ React.createElement(charts.XAxis, { dataKey: index }),
  yAxis = /* @__PURE__ */ React.createElement(charts.YAxis, null),
  tooltip = /* @__PURE__ */ React.createElement(charts.ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }),
  legend = /* @__PURE__ */ React.createElement(charts.ChartLegend, null),
  children = categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React.createElement(
      recharts.Bar,
      {
        key: index2,
        dataKey: category,
        fill: color,
        stackId: stacked ? "a" : void 0,
        isAnimationActive: false
      }
    );
  }),
  layout,
  syncId,
  margin,
  barCategoryGap,
  barGap,
  barSize,
  maxBarSize,
  stackOffset,
  reverseStackOrder,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ React.createElement(charts.ChartContextProvider, { categories, colors, dark }, /* @__PURE__ */ React.createElement(charts.AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React.createElement(
    recharts.BarChart,
    {
      data,
      height,
      width,
      layout,
      syncId,
      margin,
      barCategoryGap,
      barGap,
      barSize,
      maxBarSize,
      stackOffset,
      reverseStackOrder
    },
    gridLines,
    xAxis,
    yAxis,
    tooltip,
    legend,
    children
  )));
});

exports.BarChart = BarChart;
//# sourceMappingURL=bar-chart.js.map
