import { DividerRoot, DividerWithChildren } from "./Divider.styles";
import { DividerProps } from "./Divider.types";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Divider(props: DividerProps): JSX.Element {
    const {
        size = "1px",
        width = "full-width",
        className,
        style,
        color,
        children,
    } = useMergeDefaultProps("Divider", props);

    return (
        <>
            {children ? (
                <DividerWithChildren
                    width={width}
                    className={cx("Divider", className)}
                    style={style}
                >
                    <DividerRoot height={size} color={color} width="full-width" />
                    {children}
                    <DividerRoot height={size} color={color} width="full-width" />
                </DividerWithChildren>
            ) : (
                <DividerRoot
                    height={size}
                    color={color}
                    width={width}
                    style={style}
                    className={cx("Divider", className)}
                />
            )}
        </>
    );
}
