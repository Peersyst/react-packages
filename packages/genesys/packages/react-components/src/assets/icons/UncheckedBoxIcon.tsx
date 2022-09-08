import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function UncheckedBoxIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            {...rest}
            data-testid="UncheckedBoxIcon"
            className={cx(undefined, "Icon", "UncheckedBoxIcon", className)}
        >
            <path
                d="M3.66667 0H20.3333C21.3058 0 22.2384 0.386309 22.9261 1.07394C23.6137 1.76158 24 2.69421 24 3.66667V20.3333C24 21.3058 23.6137 22.2384 22.9261 22.9261C22.2384 23.6137 21.3058 24 20.3333 24H3.66667C2.69421 24 1.76158 23.6137 1.07394 22.9261C0.386309 22.2384 0 21.3058 0 20.3333V3.66667C0 2.69421 0.386309 1.76158 1.07394 1.07394C1.76158 0.386309 2.69421 0 3.66667 0V0ZM3.66667 2C2.74667 2 2 2.74667 2 3.66667V20.3333C2 21.2533 2.74667 22 3.66667 22H20.3333C21.2533 22 22 21.2533 22 20.3333V3.66667C22 2.74667 21.2533 2 20.3333 2H3.66667Z"
                fill="black"
            />
        </SvgIcon>
    );
}
