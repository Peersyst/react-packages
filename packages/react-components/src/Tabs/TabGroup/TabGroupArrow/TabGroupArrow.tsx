import { TabGroupArrowProps } from "./TabGroupArrow.types";
import { IconButton } from "../../../IconButton";

export function TabGroupArrow({
    direction,
    onScroll,
    tabGroupWidth,
    tabGroupScrollLeft,
    tabGroupScrollWidth,
    children,
}: TabGroupArrowProps): JSX.Element {
    const disabled = direction === "left" ? tabGroupScrollLeft <= 0 : tabGroupScrollLeft + tabGroupWidth >= tabGroupScrollWidth;

    return tabGroupWidth < tabGroupScrollWidth ? (
        <IconButton onClick={() => !disabled && onScroll(direction)} disabled={disabled}>
            {children}
        </IconButton>
    ) : (
        <></>
    );
}
