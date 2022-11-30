import * as Clipboard from "expo-clipboard";
import { CopyButtonProps } from "./CopyButton.types";
import { useToast } from "../../feedback/ToastProvider";
import { IconButton } from "../../input/IconButton";
import { CopyIcon } from "../../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const CopyButton = (props: CopyButtonProps): JSX.Element => {
    const { text, style, message, ...rest } = useMergeDefaultProps("CopyButton", props);

    const { showToast } = useToast();

    const copyToClipboard = () => {
        Clipboard.setStringAsync(text);
        if (message) showToast(message, { type: "success" });
    };

    return (
        <IconButton {...rest} style={style} onPress={() => copyToClipboard()}>
            <CopyIcon />
        </IconButton>
    );
};

export default CopyButton;
