import { TypographyRoot } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";
import { useTheme } from "../theme";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import useColor from "../hooks/useColor";

export default function Typography(props: TypographyProps): JSX.Element {
    const {
        variant: variantKey,
        children,
        className,
        light,
        color: colorProp,
        ...rest
    } = useMergeDefaultProps("Typography", props);

    const { typography } = useTheme();
    const color = useColor(colorProp);

    const { component, style } =
        variantKey === "inherit"
            ? { component: "div", style: {} }
            : typography[variantKey as never];

    return (
        <TypographyRoot
            as={component as any}
            variantStyles={style}
            color={color}
            className={cx("Typography", "Typography-" + variantKey, light && "Light", className)}
            {...rest}
        >
            {children}
        </TypographyRoot>
    );
}
