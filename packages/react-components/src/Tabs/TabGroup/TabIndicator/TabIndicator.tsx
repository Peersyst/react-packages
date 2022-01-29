import React, { useContext, useEffect, useState } from "react";
import { TabIndicatorRoot } from "./TabIndicator.styles";
import { TabsContext } from "../../TabsContext";
import { TabIndicatorProps } from "./TabIndicator.types";
import { cx } from "../../../utils/cx";

export function TabIndicator({ tabGroupRef, className, style }: TabIndicatorProps): JSX.Element {
    const [tabWidth, setTabWidth] = useState<number>(0);
    const [tabX, setTabX] = useState<number>(0);
    const [tabGroupX, setTabGroupX] = useState<number>(0);
    const [scrollX, setScrollX] = useState<number>(0);

    const { activeRef } = useContext(TabsContext);

    useEffect(() => {
        const { width, x } = activeRef?.getBoundingClientRect() || {
            width: 0,
            x: 0,
        };
        setTabWidth(width);
        setTabX(x);
        setTabGroupX(tabGroupRef?.current?.getBoundingClientRect().x || 0);
        setScrollX(tabGroupRef?.current?.scrollLeft || 0);
    }, [activeRef, tabGroupRef]);

    return (
        <TabIndicatorRoot className={cx("TabIndicator", className)} style={style} width={tabWidth} position={tabX - tabGroupX + scrollX} />
    );
}
