import { ChipProps } from "./Chip.types";
import { useMergeDefaultProps, useTheme } from "@peersyst/react-components-core";
import { chipGapSizes, ChipLabel, ChipRoot } from "./Chip.styles";
import { cx } from "@peersyst/react-utils";
import { forwardRef, isValidElement, MouseEventHandler } from "react";
import { IconButton } from "../IconButton";
import { setRef } from "@peersyst/react-utils";

const Chip = forwardRef((props: ChipProps, ref): JSX.Element => {
    const {
        clickable: clickableProp,
        onClick,
        deleteIcon: deleteIconProp,
        onDelete,
        rounded,
        disabled,
        variant,
        size,
        label,
        prefix,
        suffix,
        className,
        style,
    } = useMergeDefaultProps("Chip", props);
    const {
        icons: { cross: CrossIcon },
    } = useTheme();

    const handleDeleteIconClick: MouseEventHandler = (event) => {
        event.stopPropagation();
        onDelete?.(event);
    };

    const clickable = clickableProp ?? !!onClick;
    const deleteIcon = onDelete ? (
        <IconButton className="DeleteButton" onClick={handleDeleteIconClick}>
            {isValidElement(deleteIconProp) ? deleteIconProp : <CrossIcon />}
        </IconButton>
    ) : undefined;

    return (
        <ChipRoot
            ref={(r) => setRef(ref, r)}
            className={cx(
                "Chip",
                clickable && "Clickable",
                deleteIcon && "Deletable",
                rounded && "Rounded",
                disabled && "Disabled",
                variant![0].toUpperCase() + variant!.slice(1),
                size![0].toUpperCase() + size!.slice(1),
                className,
            )}
            style={style}
            gap={chipGapSizes[size!]}
            onClick={disabled ? undefined : onClick}
            role={onClick ? "button" : undefined}
        >
            {prefix}
            <ChipLabel className="ChipLabel">{label}</ChipLabel>
            {deleteIcon || suffix}
        </ChipRoot>
    );
});

export default Chip;
