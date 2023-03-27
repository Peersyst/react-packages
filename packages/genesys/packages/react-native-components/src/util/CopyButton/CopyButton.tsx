import * as Clipboard from "expo-clipboard";
import { CopyButtonProps } from "./CopyButton.types";
import { useToast } from "../../feedback/ToastProvider";
import { IconButton } from "../../input/IconButton";
import { CopyIcon } from "../../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import useCopyToClipboard from "../../hooks/useCopyToClipboard/useCopyToClipboard";

const CopyButton = (props: CopyButtonProps): JSX.Element => {
    const { text, style, message, ...rest } = useMergeDefaultProps("CopyButton", props);

    const copyToClipboard = useCopyToClipboard();

    return (
        <IconButton {...rest} style={style} onPress={() => copyToClipboard({ message })}>
            <CopyIcon />
        </IconButton>
    );
};

export default CopyButton;
