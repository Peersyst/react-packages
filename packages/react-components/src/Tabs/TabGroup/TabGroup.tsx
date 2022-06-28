import { createRef } from "react";
import { TabGroupContainer, TabGroupRoot } from "./TabGroup.styles";
import { TabIndicator } from "./TabIndicator";
import { TabGroupArrow } from "./TabGroupArrow";
import { useTabGroupSize } from "./hook/useTabGroupSize";
import { TabGroupProps } from "./TabGroup.types";
import { cx } from "@peersyst/react-utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets/icons";

export default function TabGroup({
    renderIndicator = true,
    indicatorClassName,
    indicatorStyle,
    leftArrowIcon = <ChevronLeftIcon />,
    rightArrowIcon = <ChevronRightIcon />,
    children,
    className,
    style,
}: TabGroupProps) {
    const ref = createRef<HTMLDivElement>();

    const { update, ...sizeInfo } = useTabGroupSize(ref);

    const handleScroll = (direction: "left" | "right") => {
        const tabGroup = ref.current;
        if (tabGroup) {
            const width = tabGroup.getBoundingClientRect().width;
            const pos =
                direction === "left" ? tabGroup.scrollLeft - width : tabGroup.scrollLeft + width;
            tabGroup.scrollLeft = pos;
            update(pos);
        }
    };

    return (
        <TabGroupRoot className={cx("TabGroup", className)} style={style}>
            <TabGroupArrow direction="left" {...sizeInfo} onScroll={handleScroll}>
                {leftArrowIcon}
            </TabGroupArrow>
            <TabGroupContainer ref={ref} className="TabGroupContainer">
                {children}
                {renderIndicator && (
                    <TabIndicator
                        tabGroupRef={ref}
                        className={indicatorClassName}
                        style={indicatorStyle}
                    />
                )}
            </TabGroupContainer>
            <TabGroupArrow direction="right" {...sizeInfo} onScroll={handleScroll}>
                {rightArrowIcon}
            </TabGroupArrow>
        </TabGroupRoot>
    );
}
