import { ComponentProps } from "react";
import { cx } from "@peersyst/react-utils";
import { LoaderIcon } from "../assets/icons";

export default function Loader({
    className,
    ...rest
}: ComponentProps<typeof LoaderIcon>): JSX.Element {
    return <LoaderIcon className={cx("Loader", className)} {...rest} />;
}
