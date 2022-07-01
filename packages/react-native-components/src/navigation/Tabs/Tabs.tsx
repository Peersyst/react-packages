import { useState } from "react";
import { TabsProvider } from "./TabsContext";
import { TabsProps } from "./Tabs.types";
import { useControlled } from "@peersyst/react-hooks";
import { Col } from "../../layout/Col";
import { LayoutRectangle } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Tabs(props: TabsProps): JSX.Element {
    const {
        index,
        onIndexChange,
        initialIndex = 0,
        style,
        gap = 20,
        children,
    } = useMergeDefaultProps("Tabs", props);

    const [activeIndex, setActiveIndex] = useControlled(initialIndex, index, onIndexChange);
    const [activeLayout, setActiveLayout] = useState<LayoutRectangle>();

    return (
        <Col style={style} gap={gap} flex={1}>
            <TabsProvider
                value={{
                    activeIndex,
                    onTabChange: setActiveIndex,
                    activeLayout,
                    setActiveLayout,
                }}
            >
                {children}
            </TabsProvider>
        </Col>
    );
}
