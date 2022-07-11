import { TypographyProps } from "./Typography.types";
import { useTheme } from "@peersyst/react-native-styled";
import { TypographyRoot } from "./Typography.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Typography = (props: TypographyProps): JSX.Element => {
    const { variant, children, ...rest } = useMergeDefaultProps("Typography", props);

    const { typography } = useTheme();
    const variantStyle = typography[variant];

    return (
        <TypographyRoot variantStyles={variantStyle} {...rest}>
            {children}
        </TypographyRoot>
    );
};

export default Typography;