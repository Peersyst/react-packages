import { HashProps } from "./Hash.types";
import { formatHash } from "@peersyst/react-utils";
import { Row } from "../../layout/Row";
import { Typography } from "../../display/Typography";
import { useTheme } from "@peersyst/react-native-styled";
import { CopyButton } from "../CopyButton";
import { TouchableOpacity } from "react-native";
import { extractTextStyles } from "@peersyst/react-native-utils";
import { useMergeDefaultProps, useTranslate } from "@peersyst/react-components-core";
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
        numberOfLines = 1,
        ...typographyProps
    } = useMergeDefaultProps("Hash", props);
    const translate = useTranslate();
    const { typography } = useTheme();
    const handleOnPress = useHashOnPressHandler({ action, hash, url, hashToSharePayload });

    //Variables
    const [textStyle, rootStyle] = extractTextStyles(style);
    const { fontSize: typographyVariantSize, ...typographyVariantStyles } = typography[variant];
    const copyFontSize = (textStyle.fontSize ? textStyle.fontSize : typographyVariantSize!) + 4;

    if (showCopyIcon && numberOfLines !== 1)
        console.warn(
            `Tried to render a Hash with showCopyIcon and numberOfLines different than 1. The showCopyIcon prop can only be used with numberOfLines = 1.`,
        );

    //Components
    const text = (
        <Typography
            numberOfLines={numberOfLines === "auto" ? undefined : numberOfLines}
            style={textStyle}
            variant={variant}
            {...typographyProps}
        >
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
            {showCopyIcon && numberOfLines === 1 && (
                <CopyButton
                    message={translate("copied_to_clipboard")}
                    text={hash}
                    style={{ ...typographyVariantStyles, ...textStyle, fontSize: copyFontSize }}
                />
            )}
        </Row>
    );
};

export default Hash;
