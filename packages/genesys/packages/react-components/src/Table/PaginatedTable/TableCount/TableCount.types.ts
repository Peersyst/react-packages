import { CSSProperties } from "react";

export interface TableCountProps {
    range: [number, number];
    total: number;
    className?: string;
    style?: CSSProperties;
}
