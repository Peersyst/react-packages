import { TypographyProps } from "./Typography.types";
import { useTheme } from "@peersyst/react-native-styled";
import { TypographyRoot } from "./Typography.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";
import { useColorStyle } from "../../theme";

const Typography = (props: TypographyProps): JSX.Element => {
    const {
        variant,
        children,
        style: { light: lightStyleProp = {}, ...styleProp } = {},
        color: colorProp,
        suppressHighlighting = true,
        ...rest
    } = useMergeDefaultProps("Typography", props);
    const { typography } = useTheme();
    const variantStyle = typography[variant];
    const { light: lightGlobalStyle, ...typographyGlobalStyle } = useGlobalStyles("Typography");

    const colorStyle = useColorStyle(colorProp);

    const style = { ...typographyGlobalStyle, ...colorStyle, ...styleProp };
    const lightStyle = { ...lightGlobalStyle, ...colorStyle, ...lightStyleProp };

    return (
        <TypographyRoot
            style={style}
            lightStyle={lightStyle}
            variantStyles={variantStyle}
            suppressHighlighting={suppressHighlighting}
            {...rest}
        >
            {children}
        </TypographyRoot>
    );
};

export default Typography;
