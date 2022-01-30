import { TypographyRoot } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";
import { useTheme } from "../Theme";
import { cx } from "@peersyst/react-utils";

export default function Typography({
    variant: variantKey,
    children,
    className,
    ...rest
}: TypographyProps): JSX.Element {
    const {
        theme: { typography },
    } = useTheme();

    const { component, style } =
        variantKey === "inherit"
            ? { component: "div", style: {} }
            : typography[variantKey as never];

    return (
        <TypographyRoot
            as={component as any}
            {...rest}
            variantStyles={style}
            className={cx("Typography", "Typography-" + variantKey, className)}
        >
            {children}
        </TypographyRoot>
    );
}
