import { TypographyProps } from "./Typography.types";
import { useTheme } from "@peersyst/react-native-styled";
import { TypographyRoot } from "./Typography.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useTypographyStyles } from "./hook";

const Typography = (rawProps: TypographyProps): JSX.Element => {
    const props = useMergeDefaultProps("Typography", rawProps);
    const {
        variant,
        children,
        suppressHighlighting = true,
        style: _style,
        light: _light,
        ...rest
    } = props;

    const { typography } = useTheme();
    const variantStyle = typography[variant];

    const style = useTypographyStyles(props);

    return (
        <TypographyRoot
            variantStyles={variantStyle}
            suppressHighlighting={suppressHighlighting}
            style={style}
            {...rest}
        >
            {children}
        </TypographyRoot>
    );
};

export default Typography;
