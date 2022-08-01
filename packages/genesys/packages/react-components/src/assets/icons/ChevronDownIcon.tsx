import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function ChevronDownIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            {...rest}
            data-testid="ChevronDownIcon"
            className={cx(undefined, "Icon", className)}
        >
            <path
                d="M0.438849 5.45759C0.719928 5.17659 1.1011 5.01874 1.49855 5.01874C1.89599 5.01874 2.27717 5.17659 2.55825 5.45759L11.9906 14.89L21.423 5.45759C21.5613 5.31443 21.7267 5.20024 21.9095 5.12169C22.0924 5.04313 22.2891 5.00179 22.4881 5.00006C22.6871 4.99833 22.8845 5.03625 23.0687 5.11162C23.2529 5.18698 23.4203 5.29828 23.561 5.43901C23.7017 5.57974 23.813 5.74709 23.8884 5.9313C23.9637 6.1155 24.0017 6.31287 23.9999 6.51189C23.9982 6.71091 23.9569 6.90759 23.8783 7.09046C23.7998 7.27333 23.6856 7.43872 23.5424 7.57699L13.0503 18.0691C12.7693 18.3501 12.3881 18.5079 11.9906 18.5079C11.5932 18.5079 11.212 18.3501 10.9309 18.0691L0.438849 7.57699C0.157854 7.29591 0 6.91473 0 6.51729C0 6.11984 0.157854 5.73867 0.438849 5.45759V5.45759Z"
                fill="black"
            />
        </SvgIcon>
    );
}
