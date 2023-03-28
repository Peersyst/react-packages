import { HashProps } from "./Hash.types";
import { formatHash } from "@peersyst/react-utils";
import { Row } from "../../layout/Row";
import { Typography } from "../../display/Typography";
import { useTheme } from "@peersyst/react-native-styled";
import { CopyButton } from "../CopyButton";
import { TouchableOpacity } from "react-native";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import useHashOnPressHandler from "./hook/useHashOnPressHandler";

const Hash = (props: HashProps): JSX.Element => {
    //Hooks
    const {
        hash,
        ellipsis,
        action,
        gap = 10,
        length,
        style,
        showCopyIcon,
        variant,
        url,
        hashToSharePayload,
        ...typographyProps
    } = useMergeDefaultProps("Hash", props);
    const { typography } = useTheme();
    const handleOnPress = useHashOnPressHandler({ action, hash, url, hashToSharePayload });

    //Variables
    const [textStyle, rootStyle] = extractTextStyles(style);
    const { fontSize: typographyVariantSize, ...typographyVariantStyles } = typography[variant];
    const copyFontSize = (textStyle.fontSize ? textStyle.fontSize : typographyVariantSize!) + 4;

    //Components
    const text = (
        <Typography numberOfLines={1} style={textStyle} variant={variant} {...typographyProps}>
            {formatHash(hash, ellipsis, length)}
        </Typography>
    );

    return (
        <Row alignItems="center" gap={gap} style={rootStyle}>
            {action !== undefined ? (
                <TouchableOpacity onPress={handleOnPress}>{text}</TouchableOpacity>
            ) : (
                text
            )}
            {showCopyIcon && (
                <CopyButton
                    text={hash}
                    style={{ ...typographyVariantStyles, ...textStyle, fontSize: copyFontSize }}
                />
            )}
        </Row>
    );
};

export default Hash;
