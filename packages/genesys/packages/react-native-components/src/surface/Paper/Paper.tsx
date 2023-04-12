import { PaperProps } from "./Paper.types";
import { PaperRoot } from "./Paper.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { usePaperStyles } from "./hooks";

const Paper = (rawProps: PaperProps): JSX.Element => {
    const props = useMergeDefaultProps("Paper", rawProps);

    const { elevation = 1, square = false, children, style: _style, ...rest } = props;

    const style = usePaperStyles(props);

    return (
        <PaperRoot elevation={elevation} square={square} style={style} {...rest}>
            {children}
        </PaperRoot>
    );
};

export default Paper;
