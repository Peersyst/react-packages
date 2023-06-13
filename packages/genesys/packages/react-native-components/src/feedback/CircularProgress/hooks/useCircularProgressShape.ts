import { useMemo } from "react";

export interface UseCircularProgressShapeProps {
    size: number;
    thickness: number;
}

export interface CircularProgressShape {
    radius: number;
    viewBox: number;
    backgroundRadius: number;
    progressRadius: number;
    strokeDasharray: number;
}

export default function useCircularProgressShape({
    size,
    thickness,
}: UseCircularProgressShapeProps): CircularProgressShape {
    return useMemo(() => {
        const radius = size / 2;
        const viewBox = radius + thickness;
        const backgroundRadius = radius + thickness;
        const progressRadius = radius + thickness / 2;
        const strokeDasharray = 2 * Math.PI * progressRadius;

        return {
            radius,
            viewBox,
            backgroundRadius,
            progressRadius,
            strokeDasharray,
        };
    }, [size, thickness]);
}
