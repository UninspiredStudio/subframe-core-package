"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var recharts = require('recharts');
var charts = require('./charts.js');
var lineChart_module = require('./line-chart.module.css.js');

const LineChart = React.forwardRef(function LineChart2({
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
  children = categories.map((category, index2) => {
    const color = colors[index2 % colors.length];
    return /* @__PURE__ */ React.createElement(
      recharts.Line,
      {
        key: index2,
        type: "monotone",
        activeDot: (props) => /* @__PURE__ */ React.createElement(recharts.Dot, { className: classNames(lineChart_module.dot, { [lineChart_module.dark]: dark }), r: 5, style: { fill: color }, ...props }),
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
  return /* @__PURE__ */ React.createElement(charts.ChartContextProvider, { categories, colors, dark }, /* @__PURE__ */ React.createElement(charts.AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React.createElement(recharts.LineChart, { data, height, width, layout, syncId, margin }, gridLines, xAxis, yAxis, tooltip, legend, children)));
});

exports.LineChart = LineChart;
//# sourceMappingURL=line-chart.js.map
