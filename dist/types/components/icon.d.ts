import React from "react";
import { icons } from "src/assets/icons/final";
export type IconName = keyof typeof icons | "empty" | null;
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    name: IconName;
}
export declare const Icon: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=icon.d.ts.map