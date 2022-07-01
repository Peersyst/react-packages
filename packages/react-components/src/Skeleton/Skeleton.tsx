import { SkeletonRoot } from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Skeleton(props: SkeletonProps): JSX.Element {
    const {
        width,
        height,
        shape = "stadium",
        animation = "wave",
        loading = true,
        appearance,
        className,
        style,
        children,
    } = useMergeDefaultProps("Skeleton", props);

    return (
        <SkeletonRoot
            width={width}
            height={height}
            shape={shape}
            animation={animation}
            isLoading={loading}
            appearance={appearance}
            className={cx("Skeleton", className)}
            style={style}
        >
            {children}
        </SkeletonRoot>
    );
}
