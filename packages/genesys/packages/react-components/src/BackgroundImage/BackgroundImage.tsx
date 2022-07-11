import { BackgroundImageRoot } from "./BackgroundImage.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { BackgroundImageProps } from "./BackgroundImage.types";

export default function BackgroundImage(props: BackgroundImageProps): JSX.Element {
    const mergedProps = useMergeDefaultProps("BackgroundImage", props);

    return <BackgroundImageRoot {...mergedProps} />;
}
