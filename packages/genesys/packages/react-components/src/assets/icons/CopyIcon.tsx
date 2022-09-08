import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function CopyIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            {...rest}
            data-testid="CopyIcon"
            className={cx(undefined, "Icon", "CopyIcon", className)}
        >
            <path
                d="M3.80324 3.15177L3.79964 5.69886V18.3011C3.79964 19.3353 4.21045 20.3271 4.9417 21.0583C5.67294 21.7896 6.66472 22.2004 7.69886 22.2004H18.036C17.8497 22.7267 17.5049 23.1824 17.049 23.5047C16.593 23.8269 16.0484 24 15.4901 24H7.69886C6.18743 24 4.7379 23.3996 3.66916 22.3308C2.60041 21.2621 2 19.8126 2 18.3011V5.69886C2 4.5231 2.75225 3.5213 3.80324 3.15177ZM18.4967 0C18.8512 0 19.2022 0.0698236 19.5297 0.205484C19.8573 0.341145 20.1548 0.539985 20.4055 0.790654C20.6562 1.04132 20.855 1.33891 20.9907 1.66642C21.1263 1.99394 21.1962 2.34496 21.1962 2.69946V18.2963C21.1962 18.6508 21.1263 19.0019 20.9907 19.3294C20.855 19.6569 20.6562 19.9545 20.4055 20.2051C20.1548 20.4558 19.8573 20.6547 19.5297 20.7903C19.2022 20.926 18.8512 20.9958 18.4967 20.9958H7.69886C6.98292 20.9958 6.2963 20.7114 5.79005 20.2051C5.28381 19.6989 4.9994 19.0123 4.9994 18.2963V2.69946C4.9994 1.98352 5.28381 1.2969 5.79005 0.790654C6.2963 0.284407 6.98292 0 7.69886 0H18.4967ZM18.4967 1.79964H7.69886C7.46021 1.79964 7.23134 1.89444 7.06259 2.06319C6.89384 2.23194 6.79904 2.46081 6.79904 2.69946V18.2963C6.79904 18.793 7.20216 19.1962 7.69886 19.1962H18.4967C18.7353 19.1962 18.9642 19.1014 19.133 18.9326C19.3017 18.7639 19.3965 18.535 19.3965 18.2963V2.69946C19.3965 2.46081 19.3017 2.23194 19.133 2.06319C18.9642 1.89444 18.7353 1.79964 18.4967 1.79964Z"
                fill="black"
            />
        </SvgIcon>
    );
}
