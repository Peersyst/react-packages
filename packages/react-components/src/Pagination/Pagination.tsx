import { PaginationProps } from "./Pagination.types";
import React from "react";
import { PagesList, PaginationRoot } from "./Pagination.styles";
import { cx } from "../utils/cx";
import { PaginationItem } from "./PaginationItem";
import usePagination from "./hooks/usePagination/usePagination";
import { PaginationItemType } from "./hooks/usePagination/usePagination.types";
import { ChevronLeftIcon, ChevronRightIcon, EndIcon, StartIcon } from "../assets/icons";

export const Pagination = ({
    defaultPage = 1,
    page,
    onChange,
    count,
    siblingCount,
    boundaryCount = 1,
    disabled,
    previousIcon = <ChevronLeftIcon />,
    nextIcon = <ChevronRightIcon />,
    startIcon: startIconProp = false,
    endIcon: endIconProp = false,
    size = "md",
    className,
    style,
}: PaginationProps): JSX.Element => {
    const items = usePagination({
        boundaryCount,
        count,
        defaultPage,
        disabled,
        hidePrevButton: !previousIcon,
        hideNextButton: !nextIcon,
        onChange,
        page,
        showFirstButton: !!startIconProp,
        showLastButton: !!endIconProp,
        siblingCount,
    });

    const startIcon = typeof startIconProp === "boolean" ? startIconProp && <StartIcon /> : startIconProp;
    const endIcon = typeof endIconProp === "boolean" ? endIconProp && <EndIcon /> : endIconProp;

    const renderItem = (type: PaginationItemType, page: number | null) => {
        switch (type) {
            case "first":
                return startIcon;
            case "previous":
                return previousIcon;
            case "start-ellipsis":
            case "end-ellipsis":
                return "…";
            case "next":
                return nextIcon;
            case "last":
                return endIcon;
            case "page":
                return page;
        }
    };

    return (
        <PaginationRoot className={cx("Pagination", className)} style={style}>
            <PagesList
                size={size}
                className={cx(
                    "PagesList",
                    size?.replace(/^./g, (x) => x.toUpperCase()),
                )}
            >
                {items.map(({ type, ...itemProps }, key) => (
                    <li key={key}>
                        <PaginationItem {...itemProps} size={size}>
                            {renderItem(type, itemProps.page)}
                        </PaginationItem>
                    </li>
                ))}
            </PagesList>
        </PaginationRoot>
    );
};
