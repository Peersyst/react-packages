import { PaginationItemRoot } from "./PaginationItem.styles";
import { PaginationItemProps } from "./PaginationItem.types";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const PaginationItem = (props: PaginationItemProps): JSX.Element => {
    const {
        page,
        disabled = false,
        size = "md",
        className,
        selected,
        ...rest
    } = useMergeDefaultProps("PaginationItem", props);

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
            type="button"
            {...rest}
        />
    );
};

export default PaginationItem;
