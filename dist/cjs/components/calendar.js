"use strict";
"use client";
'use strict';

var React = require('react');
var reactDayPicker = require('react-day-picker');
var icon = require('./icon.js');

const Calendar = React.forwardRef(function CalendarRoot({ classNames, className, showOutsideDays = true, ...otherProps }, ref) {
  return /* @__PURE__ */ React.createElement("div", { className, ref }, /* @__PURE__ */ React.createElement(
    reactDayPicker.DayPicker,
    {
      components: {
        Chevron: (props) => {
          if (props.orientation === "left") {
            return /* @__PURE__ */ React.createElement(icon.Icon, { name: "FeatherChevronLeft", ...props });
          }
          return /* @__PURE__ */ React.createElement(icon.Icon, { name: "FeatherChevronRight", ...props });
        }
      },
      showOutsideDays,
      classNames,
      ...otherProps
    }
  ));
});

exports.Calendar = Calendar;
//# sourceMappingURL=calendar.js.map
