import { PaperProps } from "./Paper.types";
import { PaperOverlay, PaperRoot } from "./Paper.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Paper = (props: PaperProps): JSX.Element => {
    const {
        elevation = 1,
        square = false,
        style,
        children,
        ...rest
    } = useMergeDefaultProps("Paper", props);

    return (
        <PaperRoot elevation={elevation} square={square} style={style} {...rest}>
            <PaperOverlay elevation={elevation} square={square} />
            {children}
        </PaperRoot>
    );
};

export default Paper;
