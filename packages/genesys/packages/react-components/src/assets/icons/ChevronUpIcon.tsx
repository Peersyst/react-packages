import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function ChevronUpIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...rest} data-testid="ChevronUpIcon" className={cx(undefined, "Icon", className)}>
            <g clipPath="url(#clip0_1618_859)">
                <path
                    d="M23.5612 18.5424C23.2801 18.8234 22.8989 18.9813 22.5014 18.9813C22.104 18.9813 21.7228 18.8234 21.4418 18.5424L12.0094 9.11L2.577 18.5424C2.4387 18.6856 2.2733 18.7998 2.0905 18.8783C1.9076 18.9569 1.7109 18.9982 1.5119 18.9999C1.3129 19.0017 1.1155 18.9638 0.931299 18.8884C0.747099 18.813 0.579699 18.7017 0.438999 18.561C0.298299 18.4203 0.187001 18.2529 0.111601 18.0687C0.0363008 17.8845 -0.00170093 17.6871 9.905e-05 17.4881C0.00179903 17.2891 0.0431001 17.0924 0.1217 16.9095C0.2002 16.7267 0.314399 16.5613 0.457599 16.423L10.9497 5.93091C11.2307 5.64991 11.6119 5.4921 12.0094 5.4921C12.4068 5.4921 12.788 5.64991 13.0691 5.93091L23.5612 16.423C23.8421 16.7041 24 17.0853 24 17.4827C24 17.8802 23.8421 18.2613 23.5612 18.5424Z"
                    fill="black"
                />
            </g>
            <defs>
                <clipPath id="clip0_1618_859">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(24 24) rotate(180)"
                    />
                </clipPath>
            </defs>
        </SvgIcon>
    );
}
