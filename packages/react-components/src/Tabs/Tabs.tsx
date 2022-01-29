import { useState } from "react";
import { Col } from "../Col";
import { TabsProvider } from "./TabsContext";
import { TabsProps } from "./Tabs.types";
import { cx } from "../utils/cx";
import { useControlled } from "../hooks";

export function Tabs({ index, onIndexChange, initialIndex = 0, className, style, children }: TabsProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useControlled(initialIndex, index, onIndexChange);
    const [activeRef, setActiveRef] = useState<HTMLDivElement | null>(null);

    return (
        <Col className={cx("Tabs", className)} style={style} gap={20}>
            <TabsProvider
                value={{
                    activeIndex,
                    onTabChange: setActiveIndex,
                    activeRef,
                    setActiveRef,
                }}
            >
                {children}
            </TabsProvider>
        </Col>
    );
}
