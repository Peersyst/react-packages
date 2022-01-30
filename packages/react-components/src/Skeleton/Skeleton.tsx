import { SkeletonRoot } from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";
import { cx } from "@peersyst/react-utils";
import { useTheme } from "../Theme";

export default function Skeleton({
    width,
    height,
    shape = "stadium",
    animation,
    loading = true,
    appearance,
    className,
    style,
    children,
}: SkeletonProps): JSX.Element {
    const {
        theme: { skeletonAnimations },
    } = useTheme();

    return (
        <SkeletonRoot
            width={width}
            height={height}
            shape={shape}
            animation={animation || skeletonAnimations}
            isLoading={loading}
            appearance={appearance}
            className={cx("Skeleton", className)}
            style={style}
        >
            {children}
        </SkeletonRoot>
    );
}
