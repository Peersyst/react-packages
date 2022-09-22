import { TypographyProps } from "./Typography.types";
import { useTheme } from "@peersyst/react-native-styled";
import { TypographyRoot } from "./Typography.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

const Typography = (props: TypographyProps): JSX.Element => {
    const {
        variant,
        children,
        style: { light: lightStyleProp = {}, ...styleProp } = {},
        ...rest
    } = useMergeDefaultProps("Typography", props);
    const { typography } = useTheme();
    const variantStyle = typography[variant];
    const { light: lightGlobalStyle, ...typographyGlobalStyle } = useGlobalStyles("Typography");

    const defaultStyle = { ...typographyGlobalStyle, ...styleProp };
    const lightStyle = { ...lightGlobalStyle, ...lightStyleProp };

    return (
        <TypographyRoot
            style={defaultStyle}
            lightStyle={lightStyle}
            variantStyles={variantStyle}
            {...rest}
        >
            {children}
        </TypographyRoot>
    );
};

export default Typography;
