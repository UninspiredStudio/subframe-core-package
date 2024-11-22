"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tw_classnames_1 = require("./tw-classnames");
describe("twClassNames", () => {
    describe("color related", () => {
        it("should override font colors", () => {
            expect((0, tw_classnames_1.twClassNames)("text-gray-300", "text-brand-300")).toBe("text-brand-300");
            expect((0, tw_classnames_1.twClassNames)("text-brand-300", "text-gray-300")).toBe("text-gray-300");
        });
        it("should override hard-coded font colors", () => {
            expect((0, tw_classnames_1.twClassNames)("text-gray-300", "text-neutral-border")).toBe("text-neutral-border");
            expect((0, tw_classnames_1.twClassNames)("text-neutral-border", "text-gray-300")).toBe("text-gray-300");
        });
        it("should override background colors", () => {
            expect((0, tw_classnames_1.twClassNames)("bg-gray-300", "bg-brand-300")).toBe("bg-brand-300");
            expect((0, tw_classnames_1.twClassNames)("bg-brand-300", "bg-gray-300")).toBe("bg-gray-300");
        });
    });
    describe("spacing", () => {
        it("should override custom spacing", () => {
            expect((0, tw_classnames_1.twClassNames)("pt-4", "pt-192")).toBe("pt-192");
        });
    });
    describe("font mixins", () => {
        it("should override font sizes", () => {
            expect((0, tw_classnames_1.twClassNames)("text-label", "text-[24px] font-[500] leading-[38px]")).toBe("text-[24px] font-[500] leading-[38px]");
            expect((0, tw_classnames_1.twClassNames)("text-[24px] font-medium leading-[38px]", "text-label")).toBe("text-label");
            expect((0, tw_classnames_1.twClassNames)("text-[24px] font-[500] leading-[38px]", "text-[14px] font-[400] leading-[16px]")).toBe("text-[14px] font-[400] leading-[16px]");
        });
    });
    describe("interactions between font mixins and colors", () => {
        it("should not override any colors and vice-versa", () => {
            expect((0, tw_classnames_1.twClassNames)("text-label", "text-brand-300")).toBe("text-label text-brand-300");
            expect((0, tw_classnames_1.twClassNames)("text-brand-300", "text-label")).toBe("text-brand-300 text-label");
        });
    });
});
