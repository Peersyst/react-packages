import { BlockchainAddressProps } from "./BlockchainAddress.types";
import { formatHash } from "@peersyst/react-utils";
import { Row } from "../../layout/Row";
import { Typography } from "../../display/Typography";
import { useTheme } from "@peersyst/react-native-styled";
import { CopyButton } from "../CopyButton";
import { Linking, TouchableOpacity } from "react-native";
import { extractTextStyles } from "@peersyst/react-native-utils";

const BlockchainAddress = ({
    address,
    ellipsis,
    type,
    length,
    style,
    variant,
    ...typographyProps
}: BlockchainAddressProps): JSX.Element => {
    const { blockchainLinks, translate, typography } = useTheme();

    const [textStyle, rootStyle] = extractTextStyles(style);
    const { fontSize: typographyVariantSize, ...typographyVariantStyles } = typography[variant];
    const copyFontSize = (textStyle.fontSize ? textStyle.fontSize : typographyVariantSize!) + 4;

    const openExplorer = () => {
        Linking.openURL(blockchainLinks[type] + address);
    };

    return (
        <Row alignItems="center" gap={10} style={rootStyle}>
            <TouchableOpacity onPress={openExplorer}>
                <Typography
                    numberOfLines={1}
                    style={textStyle}
                    variant={variant}
                    {...typographyProps}
                >
                    {formatHash(address, ellipsis, length)}
                </Typography>
            </TouchableOpacity>
            <CopyButton
                text={address}
                message={translate("copied_to_clipboard")}
                style={{ ...typographyVariantStyles, ...textStyle, fontSize: copyFontSize }}
            />
        </Row>
    );
};

export default BlockchainAddress;
