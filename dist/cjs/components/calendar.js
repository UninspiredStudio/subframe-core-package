"use client";
'use strict';

var React = require('react');
var reactDayPicker = require('react-day-picker');
var icon = require('./icon.js');

const Calendar = React.forwardRef(function CalendarRoot({ classNames, className, showOutsideDays = true, ...otherProps }, ref) {
    return (React.createElement("div", { className: className, ref: ref },
        React.createElement(reactDayPicker.DayPicker, { components: {
                Chevron: (props) => {
                    if (props.orientation === "left") {
                        return React.createElement(icon.Icon, { name: "FeatherChevronLeft", ...props });
                    }
                    return React.createElement(icon.Icon, { name: "FeatherChevronRight", ...props });
                },
            }, showOutsideDays: showOutsideDays, classNames: classNames, ...otherProps })));
});

exports.Calendar = Calendar;
//# sourceMappingURL=calendar.js.map
