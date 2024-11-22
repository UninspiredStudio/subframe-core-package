"use strict";
"use client";
import classNames from 'classnames';
import React__default from 'react';
import { AreaChart as AreaChart$1, Area, Dot } from 'recharts';
import styles from './area-chart.module.css.js';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend } from './charts.js';

const AreaChart = React__default.forwardRef(function AreaChart2({
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
  children = /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React__default.createElement("defs", { key: category }, /* @__PURE__ */ React__default.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React__default.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }), /* @__PURE__ */ React__default.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 })));
  }), categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React__default.createElement(
      Area,
      {
        key: index2,
        type: "monotone",
        activeDot: (props) => {
          const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
          return /* @__PURE__ */ React__default.createElement(
            Dot,
            {
              className: classNames(styles.dot, { [styles.dark]: dark }),
              cx,
              cy,
              r: 5,
              fill: color,
              stroke,
              strokeLinecap,
              strokeLinejoin,
              strokeWidth
            }
          );
        },
        dataKey: category,
        fill: `url(#${color})`,
        isAnimationActive: false,
        stackId: "a",
        stroke: color,
        strokeLinejoin: "round",
        strokeLinecap: "round",
        strokeWidth: 2
      }
    );
  })),
  layout,
  syncId,
  margin,
  stackOffset,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ React__default.createElement(ChartContextProvider, { categories, colors, dark }, /* @__PURE__ */ React__default.createElement(AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React__default.createElement(
    AreaChart$1,
    {
      data,
      height,
      width,
      layout,
      syncId,
      margin,
      stackOffset
    },
    gridLines,
    xAxis,
    yAxis,
    tooltip,
    legend,
    children
  )));
});

export { AreaChart };
//# sourceMappingURL=area-chart.js.map
