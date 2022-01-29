import React, { ComponentProps } from "react";
import { LoaderIcon } from "../assets/icons";
import { cx } from "../utils/cx";

export function Loader({ className, ...rest }: ComponentProps<typeof LoaderIcon>): JSX.Element {
    return <LoaderIcon className={cx("Loader", className)} {...rest} />;
}
