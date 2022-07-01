import { useState } from "react";
import { Col } from "../Col";
import { TabsProvider } from "./TabsContext";
import { TabsProps } from "./Tabs.types";
import { cx } from "@peersyst/react-utils";
import { useControlled } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Tabs(props: TabsProps): JSX.Element {
    const {
        index,
        onIndexChange,
        initialIndex = 0,
        className,
        style,
        children,
    } = useMergeDefaultProps("Tabs", props);

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
