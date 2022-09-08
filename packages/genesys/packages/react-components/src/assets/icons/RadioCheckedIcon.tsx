import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function RadioCheckedIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            {...rest}
            data-testid="RadioCheckedIcon"
            className={cx(undefined, "Icon", "RadioCheckedIcon", className)}
        >
            <path
                d="M12 0C18.6275 0 24 5.37253 24 12C24 18.6263 18.6275 23.9988 12 23.9988C5.37252 23.9988 0 18.6263 0 12C0 5.37253 5.37252 0 12 0ZM12 1.79964C10.6512 1.78501 9.31297 2.03803 8.06265 2.54406C6.81233 3.05008 5.67478 3.79906 4.71585 4.74765C3.75692 5.69624 2.99565 6.82559 2.47609 8.07035C1.95653 9.31511 1.68902 10.6506 1.68902 11.9994C1.68902 13.3482 1.95653 14.6837 2.47609 15.9284C2.99565 17.1732 3.75692 18.3026 4.71585 19.2511C5.67478 20.1997 6.81233 20.9487 8.06265 21.4547C9.31297 21.9608 10.6512 22.2138 12 22.1992C14.6779 22.1581 17.2322 21.0655 19.1114 19.1572C20.9906 17.249 22.0439 14.6782 22.0439 12C22.0439 9.32179 20.9906 6.75103 19.1114 4.84278C17.2322 2.93454 14.6779 1.84192 12 1.80084V1.79964ZM11.9964 4.79904C13.9049 4.79904 15.7353 5.5572 17.0849 6.90675C18.4344 8.25629 19.1926 10.0867 19.1926 11.9952C19.1926 13.9037 18.4344 15.7341 17.0849 17.0837C15.7353 18.4332 13.9049 19.1914 11.9964 19.1914C10.0879 19.1914 8.25749 18.4332 6.90795 17.0837C5.5584 15.7341 4.80024 13.9037 4.80024 11.9952C4.80024 10.0867 5.5584 8.25629 6.90795 6.90675C8.25749 5.5572 10.0879 4.79904 11.9964 4.79904V4.79904Z"
                fill="black"
            />
        </SvgIcon>
    );
}
