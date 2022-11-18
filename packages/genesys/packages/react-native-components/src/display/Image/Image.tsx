import {
    ImageLoadEventData,
    NativeSyntheticEvent,
    Image as BaseImage,
    ImageSourcePropType,
    ImageErrorEventData,
} from "react-native";
import { useState } from "react";
import Skeleton from "../../feedback/Skeleton/Skeleton";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { ImageProps } from "./Image.types";

const Image = (props: ImageProps): JSX.Element => {
    const {
        source: srcProp,
        onLoad,
        onError,
        loading,
        fallback,
        ...rest
    } = useMergeDefaultProps("Image", props);

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
        setLoaded(true);
        if (!error) onLoad?.(e);
    };

    const handleError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
        if (!error) {
            setError(true);
            onError?.(e);
        } else setLoaded(true);
    };

    const src = ((): ImageSourcePropType => {
        if (!error || !fallback) return srcProp;
        else return fallback;
    })();

    return (
        <Skeleton loading={!loaded || loading}>
            <BaseImage source={src} onLoad={handleLoad} onError={handleError} {...rest} />
        </Skeleton>
    );
};

export default Image;
