import {
    ImageLoadEventData,
    ImageProps,
    NativeSyntheticEvent,
    Image as BaseImage,
} from "react-native";
import { useState } from "react";
import Skeleton from "../../feedback/Skeleton/Skeleton";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Image = (props: ImageProps): JSX.Element => {
    const { onLoad, ...rest } = useMergeDefaultProps("Image", props);

    const [loading, setLoading] = useState(true);

    const handleLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
        setLoading(false);
        onLoad?.(event);
    };

    return (
        <Skeleton loading={loading}>
            <BaseImage onLoad={handleLoad} {...rest} />
        </Skeleton>
    );
};

export default Image;
