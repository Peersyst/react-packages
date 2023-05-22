import { CopyButtonProps } from "./CopyButton.types";
import { IconButton } from "../../input/IconButton";
import { useMergeDefaultProps, useTheme } from "@peersyst/react-components-core";
import useCopyToClipboard from "../../hooks/useCopyToClipboard/useCopyToClipboard";

const CopyButton = (props: CopyButtonProps): JSX.Element => {
    const { text, style, message, ...rest } = useMergeDefaultProps("CopyButton", props);
    const {
        icons: { copy: CopyIcon },
    } = useTheme();
    const copyToClipboard = useCopyToClipboard();

    return (
        <IconButton
            {...rest}
            style={style}
            onPress={() => copyToClipboard({ toastMessage: message, text })}
        >
            <CopyIcon />
        </IconButton>
    );
};

export default CopyButton;
