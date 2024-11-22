"use client";
import React from "react";
import { DayPicker } from "react-day-picker";
import { Icon } from "./icon";
export const Calendar = React.forwardRef(function CalendarRoot({ classNames, className, showOutsideDays = true, ...otherProps }, ref) {
    return (React.createElement("div", { className: className, ref: ref },
        React.createElement(DayPicker, { components: {
                Chevron: (props) => {
                    if (props.orientation === "left") {
                        return React.createElement(Icon, { name: "FeatherChevronLeft", ...props });
                    }
                    return React.createElement(Icon, { name: "FeatherChevronRight", ...props });
                },
            }, showOutsideDays: showOutsideDays, classNames: classNames, ...otherProps })));
});
