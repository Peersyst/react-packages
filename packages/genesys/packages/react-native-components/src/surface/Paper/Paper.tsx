import { PaperProps } from "./Paper.types";
import { PaperRoot } from "./Paper.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

const Paper = (props: PaperProps): JSX.Element => {
    const {
        elevation = 1,
        square = false,
        style: styleProp = {},
        children,
        ...rest
    } = useMergeDefaultProps("Paper", props);

    const defaultStyle = useGlobalStyles("Paper");
    const style = { ...defaultStyle, ...styleProp };

    return (
        <PaperRoot elevation={elevation} square={square} style={style} {...rest}>
            {children}
        </PaperRoot>
    );
};

export default Paper;
