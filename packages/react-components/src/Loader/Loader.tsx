import { ComponentProps } from "react";
import { LoaderIcon } from "../assets/icons";
import { cx } from "@peersyst/react-utils";

export default function Loader({
    className,
    ...rest
}: ComponentProps<typeof LoaderIcon>): JSX.Element {
    return <LoaderIcon className={cx("Loader", className)} {...rest} />;
}
