import { ImageProps as BaseImageProps, ImageSourcePropType } from "react-native";

export interface ImageProps extends BaseImageProps {
    /**
     * Image fallback
     */
    fallback?: ImageSourcePropType;
    /**
     * External loading
     */
    loading?: boolean;
}
