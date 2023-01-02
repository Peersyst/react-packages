import { Image as BaseImage } from "react-native";
import Skeleton from "../../feedback/Skeleton/Skeleton";
import { useImageSrc, useMergeDefaultProps } from "@peersyst/react-components-core";
import { ImageProps } from "./Image.types";

const Image = (props: ImageProps): JSX.Element => {
    const {
        source,
        onLoad,
        onError,
        loading = false,
        fallback,
        ...rest
    } = useMergeDefaultProps("Image", props);

    const { src, handleLoad, handleError, loaded } = useImageSrc(source, fallback, onLoad, onError);

    return (
        <Skeleton loading={!loaded || loading}>
            <BaseImage source={src ?? source} onLoad={handleLoad} onError={handleError} {...rest} />
        </Skeleton>
    );
};

export default Image;
