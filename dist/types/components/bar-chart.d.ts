import React from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    categories: string[];
    colors?: string[];
    dark?: boolean;
    data: Array<object>;
    index: string;
    stacked?: boolean;
    gridLines?: React.ReactNode;
    xAxis?: React.ReactNode;
    yAxis?: React.ReactNode;
    tooltip?: React.ReactNode;
    legend?: React.ReactNode;
    layout?: "horizontal" | "vertical";
    syncId?: number | string;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    barCategoryGap?: number | string;
    barGap?: number | string;
    barSize?: number | string;
    maxBarSize?: number;
    stackOffset?: "expand" | "none" | "wiggle" | "silhouette";
    reverseStackOrder?: boolean;
}
export declare const BarChart: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=bar-chart.d.ts.map