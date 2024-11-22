"use strict";
"use client";
'use strict';

var classNames = require('classnames');
var React = require('react');
var recharts = require('recharts');
var charts = require('./charts.js');
var pieChart_module = require('./pie-chart.module.css.js');

const PieChart = React.forwardRef(function PieChart2({
  className,
  category,
  colors = charts.DEFAULT_COLORS,
  dark,
  data,
  index,
  tooltip = /* @__PURE__ */ React.createElement(charts.ChartTooltip, null),
  legend = /* @__PURE__ */ React.createElement(charts.ChartLegend, null),
  children = /* @__PURE__ */ React.createElement(
    recharts.Pie,
    {
      className: classNames(pieChart_module.pie, { [pieChart_module.dark]: dark }),
      data,
      cx: "50%",
      cy: "50%",
      startAngle: 90,
      endAngle: -270,
      innerRadius: "75%",
      isAnimationActive: false,
      outerRadius: "100%",
      dataKey: category,
      nameKey: index
    },
    data.map((_, index2) => {
      return /* @__PURE__ */ React.createElement(recharts.Cell, { key: index2, fill: colors[index2 % colors.length] });
    })
  ),
  margin,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ React.createElement(charts.ChartContextProvider, { categories: data.map((obj) => obj[index]), colors, dark }, /* @__PURE__ */ React.createElement(charts.AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React.createElement(recharts.PieChart, { data, height, width, margin }, tooltip, legend, children)));
});

exports.PieChart = PieChart;
//# sourceMappingURL=pie-chart.js.map
