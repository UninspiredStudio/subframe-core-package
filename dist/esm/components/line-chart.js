"use strict";
"use client";
import classNames from 'classnames';
import React__default from 'react';
import { LineChart as LineChart$1, Line, Dot } from 'recharts';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend } from './charts.js';
import styles from './line-chart.module.css.js';

const LineChart = React__default.forwardRef(function LineChart2({
  categories,
  colors = DEFAULT_COLORS,
  dark,
  data,
  index,
  gridLines = /* @__PURE__ */ React__default.createElement(CartesianGrid, null),
  xAxis = /* @__PURE__ */ React__default.createElement(XAxis, { dataKey: index }),
  yAxis = /* @__PURE__ */ React__default.createElement(YAxis, null),
  tooltip = /* @__PURE__ */ React__default.createElement(ChartTooltip, null),
  legend = /* @__PURE__ */ React__default.createElement(ChartLegend, null),
  children = categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React__default.createElement(
      Line,
      {
        key: index2,
        type: "monotone",
        activeDot: (props) => /* @__PURE__ */ React__default.createElement(Dot, { className: classNames(styles.dot, { [styles.dark]: dark }), r: 5, style: { fill: color }, ...props }),
        dot: false,
        dataKey: category,
        fill: color,
        isAnimationActive: false,
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2
      }
    );
  }),
  layout,
  syncId,
  margin,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ React__default.createElement(ChartContextProvider, { categories, colors, dark }, /* @__PURE__ */ React__default.createElement(AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React__default.createElement(LineChart$1, { data, height, width, layout, syncId, margin }, gridLines, xAxis, yAxis, tooltip, legend, children)));
});

export { LineChart };
//# sourceMappingURL=line-chart.js.map
