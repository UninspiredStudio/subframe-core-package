"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const react_1 = __importDefault(require("react"));
const react_day_picker_1 = require("react-day-picker");
const icon_1 = require("./icon");
exports.Calendar = react_1.default.forwardRef(function CalendarRoot({ classNames, className, showOutsideDays = true, ...otherProps }, ref) {
    return (react_1.default.createElement("div", { className: className, ref: ref },
        react_1.default.createElement(react_day_picker_1.DayPicker, { components: {
                Chevron: (props) => {
                    if (props.orientation === "left") {
                        return react_1.default.createElement(icon_1.Icon, { name: "FeatherChevronLeft", ...props });
                    }
                    return react_1.default.createElement(icon_1.Icon, { name: "FeatherChevronRight", ...props });
                },
            }, showOutsideDays: showOutsideDays, classNames: classNames, ...otherProps })));
});
