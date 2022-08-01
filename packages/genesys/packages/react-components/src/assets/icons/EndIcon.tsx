import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function EndIcon({
    className,
    ...rest
}: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...rest} data-testid="EndIcon" className={cx(undefined, "Icon", className)}>
            <path
                d="M17.3341 0C17.6607 4.30834e-05 17.9759 0.119949 18.22 0.336975C18.4641 0.554 18.62 0.853051 18.6582 1.17741L18.6675 1.33342V22.6681C18.6672 23.0079 18.537 23.3348 18.3037 23.5819C18.0704 23.8291 17.7515 23.9778 17.4123 23.9977C17.073 24.0176 16.7389 23.9072 16.4783 23.6891C16.2177 23.471 16.0502 23.1616 16.01 22.8241L16.0007 22.6681V1.33342C16.0007 0.979772 16.1412 0.640612 16.3912 0.390548C16.6413 0.140484 16.9805 0 17.3341 0ZM0.390406 0.390691C0.620011 0.161108 0.925496 0.023191 1.24955 0.00281478C1.57361 -0.0175614 1.89396 0.0810033 2.15051 0.280017L2.27586 0.390691L12.9432 11.058C13.1728 11.2876 13.3107 11.5931 13.3311 11.9172C13.3514 12.2412 13.2529 12.5616 13.0539 12.8181L12.9432 12.9435L2.27586 23.6108C2.0359 23.8499 1.71391 23.9888 1.37529 23.9991C1.03667 24.0095 0.706808 23.8905 0.452705 23.6665C0.198602 23.4424 0.0393103 23.13 0.00718352 22.7928C-0.0249433 22.4555 0.072504 22.1187 0.279732 21.8507L0.390406 21.7253L10.115 12.0007L0.390406 2.27614C0.140429 2.02609 0 1.68699 0 1.33342C0 0.979841 0.140429 0.640743 0.390406 0.390691V0.390691Z"
                fill="black"
            />
        </SvgIcon>
    );
}
