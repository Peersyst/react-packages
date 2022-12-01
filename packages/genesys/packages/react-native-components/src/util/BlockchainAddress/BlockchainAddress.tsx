import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { formatHash } from "@peersyst/react-utils";
import { Row } from "../../layout/Row";
import { Typography } from "../../display/Typography";
import { useTheme } from "@peersyst/react-native-styled";
import { CopyButton } from "../CopyButton";
import { Linking, TouchableOpacity } from "react-native";
import { extractTextStyles } from "@peersyst/react-native-utils";
import {
    useComponentConfig,
    useMergeDefaultProps,
    useTranslate,
} from "@peersyst/react-components-core";

const BlockchainAddress = (props: BlockchainAddressProps): JSX.Element => {
    const { address, ellipsis, type, length, style, copy, variant, ...typographyProps } =
        useMergeDefaultProps("BlockchainAddress", props);

    const { typography } = useTheme();
    const translate = useTranslate();
    const { blockchainLinks } = useComponentConfig("BlockchainAddress");

    const [textStyle, rootStyle] = extractTextStyles(style);
    const { fontSize: typographyVariantSize, ...typographyVariantStyles } = typography[variant];
    const copyFontSize = (textStyle.fontSize ? textStyle.fontSize : typographyVariantSize!) + 4;

    const openExplorer = () => {
        Linking.openURL(blockchainLinks[type] + address);
    };

    return (
        <Row alignItems="center" gap={10} style={rootStyle}>
            <TouchableOpacity onPress={copy ? openExplorer : () => void 0}>
                <Typography
                    numberOfLines={1}
                    style={textStyle}
                    variant={variant}
                    {...typographyProps}
                >
                    {formatHash(address, ellipsis, length)}
                </Typography>
            </TouchableOpacity>
            {copy && (
                <CopyButton
                    text={address}
                    message={translate("copied_to_clipboard")}
                    style={{ ...typographyVariantStyles, ...textStyle, fontSize: copyFontSize }}
                />
            )}
        </Row>
    );
};

export default BlockchainAddress;
