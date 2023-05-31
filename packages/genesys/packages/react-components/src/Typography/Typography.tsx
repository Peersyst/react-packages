import { TypographyRoot } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";
import { useTheme } from "../theme";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps, useColor } from "@peersyst/react-components-core";

export default function Typography(props: TypographyProps): JSX.Element {
    const {
        variant: variantKey,
        children,
        className,
        light,
        color: colorProp,
        singleLine,
        numberOfLines: numberOfLinesProp,
        ...rest
    } = useMergeDefaultProps("Typography", props);

    const { typography } = useTheme();
    const color = useColor(colorProp);
    const numberOfLines = numberOfLinesProp ?? (singleLine ? 1 : undefined);

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
            numberOfLines={numberOfLines}
            {...rest}
        >
            {children}
        </TypographyRoot>
    );
}
