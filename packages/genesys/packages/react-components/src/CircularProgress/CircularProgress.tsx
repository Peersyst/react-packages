import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { CircularProgressProps } from "./CircularProgress.types";
import {
    CircularProgressCircle,
    CircularProgressRoot,
    CircularProgressSvg,
} from "./CircularProgress.styles";
import { cx } from "@peersyst/react-utils";

const SIZE = 44;

export default function CircularProgress(props: CircularProgressProps): JSX.Element {
    const {
        value,
        className,
        style,
        color = "primary",
        size = 40,
        thickness = 3.6,
    } = useMergeDefaultProps("CircularProgress", props);

    const circleStyle = {} as any;
    const rootStyle = {} as any;
    const rootProps = {} as any;

    if (value) {
        const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
        circleStyle.strokeDasharray = circumference.toFixed(3);
        rootProps["aria-valuenow"] = Math.round(value);
        circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
        rootStyle.transform = "rotate(-90deg)";
    }

    return (
        <CircularProgressRoot
            className={cx("CircularProgress", className)}
            style={{ width: size, height: size, ...rootStyle, ...style }}
            role="progressbar"
        >
            <CircularProgressSvg viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
                <CircularProgressCircle
                    style={circleStyle}
                    cx={SIZE}
                    cy={SIZE}
                    r={(SIZE - thickness) / 2}
                    fill="none"
                    strokeWidth={thickness}
                />
            </CircularProgressSvg>
        </CircularProgressRoot>
    );
}
