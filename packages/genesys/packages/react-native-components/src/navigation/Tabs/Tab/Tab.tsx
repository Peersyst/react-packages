import { useContext, useEffect, useState } from "react";
import { TabsContext } from "../TabsContext";
import { TabRoot } from "./Tab.styles";
import { TabProps } from "./Tab.types";
import { LayoutChangeEvent, LayoutRectangle, TouchableWithoutFeedback } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Tab(props: TabProps): JSX.Element {
    const {
        index,
        style: { active: activeStyle = {}, ...style } = {},
        children,
    } = useMergeDefaultProps("Tab", props);

    const [layout, setLayout] = useState<LayoutRectangle>();
    const { activeIndex, onTabChange, setActiveLayout } = useContext(TabsContext);

    const isActive = activeIndex === index;

    const handleLayout = ({ nativeEvent: { layout: newLayout } }: LayoutChangeEvent) => {
        setLayout(newLayout);
    };

    useEffect(() => {
        if (isActive && layout) setActiveLayout(layout);
    }, [isActive, layout, setActiveLayout]);

    return (
        <TouchableWithoutFeedback onPress={() => onTabChange(index)}>
            <TabRoot style={{ ...style, ...(isActive && activeStyle) }} onLayout={handleLayout}>
                {children}
            </TabRoot>
        </TouchableWithoutFeedback>
    );
}
