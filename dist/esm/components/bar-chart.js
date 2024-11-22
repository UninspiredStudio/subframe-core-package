"use strict";
"use client";
import React__default from 'react';
import { BarChart as BarChart$1, Bar } from 'recharts';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend } from './charts.js';

const BarChart = React__default.forwardRef(function BarChart2({
  categories,
  colors = DEFAULT_COLORS,
  dark,
  data,
  index,
  stacked,
  gridLines = /* @__PURE__ */ React__default.createElement(CartesianGrid, null),
  xAxis = /* @__PURE__ */ React__default.createElement(XAxis, { dataKey: index }),
  yAxis = /* @__PURE__ */ React__default.createElement(YAxis, null),
  tooltip = /* @__PURE__ */ React__default.createElement(ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }),
  legend = /* @__PURE__ */ React__default.createElement(ChartLegend, null),
  children = categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React__default.createElement(
      Bar,
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
  return /* @__PURE__ */ React__default.createElement(ChartContextProvider, { categories, colors, dark }, /* @__PURE__ */ React__default.createElement(AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React__default.createElement(
    BarChart$1,
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

export { BarChart };
//# sourceMappingURL=bar-chart.js.map
