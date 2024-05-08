import { CircularProgressProps } from "./CircularProgress.types";
import {
    CircularProgressCircle,
    CircularProgressContent,
    CircularProgressRoot,
    CircularProgressSvg,
    CircularProgressWrapper,
} from "./CircularProgress.styles";
import { cx } from "@peersyst/react-utils";
import { useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

const SIZE = 44;

export default function CircularProgress(props: CircularProgressProps): JSX.Element {
    const {
        value = 0,
        className,
        style,
        color: colorProp = "primary",
        size = 40,
        thickness = 4,
        variant = "indeterminate",
        children,
    } = useMergeDefaultProps("CircularProgress", props);

    const color = useColor(colorProp);

    const circleStyle: CSSProperties = {};
    const rootStyle: CSSProperties = {};

    if (variant === "determinate") {
        const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
        circleStyle.strokeDasharray = circumference.toFixed(3);
        circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
        rootStyle.transform = "rotate(-90deg)";
    }

    return (
        <CircularProgressWrapper>
            <CircularProgressRoot
                className={cx("CircularProgress", className)}
                style={{ width: size, height: size, color, ...rootStyle, ...style }}
                role="progressbar"
                variant={variant}
            >
                <CircularProgressSvg
                    className="CircularProgressSvg"
                    viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
                >
                    <CircularProgressCircle
                        className="CircularProgressCircle"
                        style={circleStyle}
                        cx={SIZE}
                        cy={SIZE}
                        r={(SIZE - thickness) / 2}
                        fill="none"
                        strokeWidth={thickness}
                        variant={variant}
                    ></CircularProgressCircle>
                </CircularProgressSvg>
            </CircularProgressRoot>
            {children && (
                <CircularProgressContent className="CircularProgressContent">
                    {children}
                </CircularProgressContent>
            )}
        </CircularProgressWrapper>
    );
}
