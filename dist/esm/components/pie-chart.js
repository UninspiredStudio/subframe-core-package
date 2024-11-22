"use strict";
"use client";
import classNames from 'classnames';
import React__default from 'react';
import { PieChart as PieChart$1, Pie, Cell } from 'recharts';
import { ChartContextProvider, AutoSizedChartWrapper, DEFAULT_COLORS, ChartTooltip, ChartLegend } from './charts.js';
import styles from './pie-chart.module.css.js';

const PieChart = React__default.forwardRef(function PieChart2({
  className,
  category,
  colors = DEFAULT_COLORS,
  dark,
  data,
  index,
  tooltip = /* @__PURE__ */ React__default.createElement(ChartTooltip, null),
  legend = /* @__PURE__ */ React__default.createElement(ChartLegend, null),
  children = /* @__PURE__ */ React__default.createElement(
    Pie,
    {
      className: classNames(styles.pie, { [styles.dark]: dark }),
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
      return /* @__PURE__ */ React__default.createElement(Cell, { key: index2, fill: colors[index2 % colors.length] });
    })
  ),
  margin,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ React__default.createElement(ChartContextProvider, { categories: data.map((obj) => obj[index]), colors, dark }, /* @__PURE__ */ React__default.createElement(AutoSizedChartWrapper, { ref, ...otherProps }, ({ height, width }) => /* @__PURE__ */ React__default.createElement(PieChart$1, { data, height, width, margin }, tooltip, legend, children)));
});

export { PieChart };
//# sourceMappingURL=pie-chart.js.map
