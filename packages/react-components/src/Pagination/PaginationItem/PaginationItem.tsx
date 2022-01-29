import React from "react";
import { PaginationItemRoot } from "./PaginationItem.styles";
import { PaginationItemProps } from "./PaginationItem.types";
import { cx } from "../../utils/cx";

export const PaginationItem = ({ page, disabled = false, size = "md", className, selected, ...rest }: PaginationItemProps): JSX.Element => {
    const isEllipsis = page === null;

    return (
        <PaginationItemRoot
            disabled={disabled}
            size={size}
            selected={selected}
            aria-current={selected ? true : undefined}
            className={cx(
                "PaginationItem",
                disabled && "Disabled",
                selected && "Selected",
                size?.replace(/^./g, (x) => x.toUpperCase()),
                className,
            )}
            isEllipsis={isEllipsis}
            as={isEllipsis ? "div" : "button"}
            {...rest}
        />
    );
};
