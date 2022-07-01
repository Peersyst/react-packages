import { TypographyRoot } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";
import { useTheme } from "../theme";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Typography(props: TypographyProps): JSX.Element {
    const {
        variant: variantKey,
        children,
        className,
        light,
        ...rest
    } = useMergeDefaultProps("Typography", props);

    const { typography } = useTheme();

    const { component, style } =
        variantKey === "inherit"
            ? { component: "div", style: {} }
            : typography[variantKey as never];

    return (
        <TypographyRoot
            as={component as any}
            {...rest}
            variantStyles={style}
            className={cx("Typography", "Typography-" + variantKey, light && "Light", className)}
        >
            {children}
        </TypographyRoot>
    );
}
