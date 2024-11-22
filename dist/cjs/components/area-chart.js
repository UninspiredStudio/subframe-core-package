"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var recharts = require('recharts');
var areaChart_module = require('./area-chart.module.css.js');
var charts = require('./charts.js');

const AreaChart = React.forwardRef(function AreaChart2({
  categories,
  colors = charts.DEFAULT_COLORS,
  dark,
  data,
  index,
  gridLines = /* @__PURE__ */ React.createElement(charts.CartesianGrid, null),
  xAxis = /* @__PURE__ */ React.createElement(charts.XAxis, { dataKey: index }),
  yAxis = /* @__PURE__ */ React.createElement(charts.YAxis, null),
  tooltip = /* @__PURE__ */ React.createElement(charts.ChartTooltip, null),
  legend = /* @__PURE__ */ React.createElement(charts.ChartLegend, null),
  children = /* @__PURE__ */ React.createElement(React.Fragment, null, categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React.createElement("defs", { key: category }, /* @__PURE__ */ React.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }), /* @__PURE__ */ React.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 })));
  }), categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React.createElement(
      recharts.Area,
      {
        key: index2,
        type: "monotone",
        activeDot: (props) => {
          const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
          return /* @__PURE__ */ React.createElement(
            recharts.Dot,
            {
              className: classNames(areaChart_module.dot, { [areaChart_module.dark]: dark }),
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
  return /* @__PURE__ */ React.createElement(charts.ChartContextProvider, { categories, colors, dark }, /* @__PURE__ */ React.createElement(charts.AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React.createElement(
    recharts.AreaChart,
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

exports.AreaChart = AreaChart;
//# sourceMappingURL=area-chart.js.map
