import { CSSProperties, MutableRefObject, ReactNode } from "react";

export interface TableLoadingOverlayRect {
    top: number;
    width: number;
    height: number;
}

export interface TableOverlayProps {
    containerRef: MutableRefObject<HTMLDivElement | undefined>;
    headerRef: MutableRefObject<HTMLDivElement | undefined>;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
