import React, { createRef, useContext, useEffect } from "react";
import { TabsContext } from "../TabsContext";
import { TabRoot } from "./Tab.styles";
import { TabProps, TabStyleProps } from "./Tab.types";
import { fsx } from "../../utils/fsx";
import { cx } from "../../utils/cx";

export function Tab({ index, className, style, children }: TabProps): JSX.Element {
    const ref = createRef<HTMLDivElement>();
    const { activeIndex, onTabChange, setActiveRef } = useContext(TabsContext);

    const isActive = activeIndex === index;

    useEffect(() => {
        if (isActive) setActiveRef(ref.current);
    }, [isActive, setActiveRef]);

    const styleProps: TabStyleProps = { active: isActive };

    return (
        <TabRoot
            className={cx(className, "TabsTab", isActive && "Active")}
            style={fsx(style, styleProps)}
            onClick={() => onTabChange(index)}
            ref={ref}
        >
            {children}
        </TabRoot>
    );
}
