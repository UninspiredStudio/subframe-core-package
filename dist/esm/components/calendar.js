"use strict";
"use client";
import React__default from 'react';
import { DayPicker } from 'react-day-picker';
import { Icon } from './icon.js';

const Calendar = React__default.forwardRef(function CalendarRoot({ classNames, className, showOutsideDays = true, ...otherProps }, ref) {
  return /* @__PURE__ */ React__default.createElement("div", { className, ref }, /* @__PURE__ */ React__default.createElement(
    DayPicker,
    {
      components: {
        Chevron: (props) => {
          if (props.orientation === "left") {
            return /* @__PURE__ */ React__default.createElement(Icon, { name: "FeatherChevronLeft", ...props });
          }
          return /* @__PURE__ */ React__default.createElement(Icon, { name: "FeatherChevronRight", ...props });
        }
      },
      showOutsideDays,
      classNames,
      ...otherProps
    }
  ));
});

export { Calendar };
//# sourceMappingURL=calendar.js.map
