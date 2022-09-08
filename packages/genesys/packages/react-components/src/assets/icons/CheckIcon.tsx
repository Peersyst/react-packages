import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function CheckIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            {...rest}
            data-testid="CheckIcon"
            className={cx(undefined, "Icon", "CheckIcon", className)}
        >
            <path
                d="M7.83738 16.8082L2.35438 11.3252L0 13.6796L7.83738 21.517L24 5.35438L21.6456 3L7.83738 16.8082Z"
                fill="black"
            />
        </SvgIcon>
    );
}
