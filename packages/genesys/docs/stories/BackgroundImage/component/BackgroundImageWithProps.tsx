import { BackgroundImage } from "@peersyst/react-components";
import { BackgroundImageProps } from "@peersyst/react-components/BackgroundImage/BackgroundImage.types";

export default function BackgroundImageWithProps(props: BackgroundImageProps): JSX.Element {
    return <BackgroundImage {...props} />;
}
