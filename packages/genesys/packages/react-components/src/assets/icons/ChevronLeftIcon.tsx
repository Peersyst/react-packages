import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function ChevronLeftIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            {...rest}
            data-testid="ChevronLeftIcon"
            className={cx(undefined, "Icon", "ChevronLeftIcon", className)}
        >
            <path
                d="M18.0704 0.439523C18.3518 0.721035 18.5099 1.10279 18.5099 1.50085C18.5099 1.89891 18.3518 2.28067 18.0704 2.56218L8.62351 12.0091L18.0704 21.4559C18.3438 21.7391 18.4952 22.1183 18.4917 22.5119C18.4883 22.9055 18.3304 23.282 18.0521 23.5603C17.7738 23.8386 17.3973 23.9965 17.0037 23.9999C16.6101 24.0034 16.2309 23.8521 15.9477 23.5786L5.43952 13.0704C5.1581 12.7889 5 12.4071 5 12.0091C5 11.611 5.1581 11.2292 5.43952 10.9477L15.9477 0.439523C16.2292 0.158097 16.611 0 17.0091 0C17.4071 0 17.7889 0.158097 18.0704 0.439523V0.439523Z"
                fill="black"
            />
        </SvgIcon>
    );
}
