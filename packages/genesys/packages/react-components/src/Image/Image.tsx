import { useState } from "react";
import { Skeleton } from "../Skeleton";
import { ImageProps } from "./Image.types";
import { StyledImg } from "./Image.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Image(props: ImageProps): JSX.Element {
    const { src, alt, className, style, SkeletonProps } = useMergeDefaultProps("Image", props);

    const [loaded, setLoaded] = useState(false);

    return (
        <Skeleton loading={!loaded} className={className} style={style} {...SkeletonProps}>
            <StyledImg
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={cx("Image", className)}
                style={style}
                role="img"
            />
        </Skeleton>
    );
}
