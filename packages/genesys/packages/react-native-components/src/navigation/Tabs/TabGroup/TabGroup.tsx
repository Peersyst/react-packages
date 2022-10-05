import { useState } from "react";
import { TabGroupRoot } from "./TabGroup.styles";
import { TabIndicator } from "./TabIndicator";
import { TabGroupProps } from "./TabGroup.types";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function TabGroup(props: TabGroupProps) {
    const {
        renderIndicator = true,
        indicator,
        indicatorStyle,
        children,
        style,
    } = useMergeDefaultProps("TabGroup", props);

    const [layout, setLayout] = useState<LayoutRectangle>();

    const handleLayout = ({ nativeEvent: { layout: newLayout } }: LayoutChangeEvent) => {
        setLayout(newLayout);
    };

    return (
        <TabGroupRoot style={style} onLayout={handleLayout}>
            {children}
            {renderIndicator && (
                <TabIndicator
                    tabGroupLayout={layout}
                    indicator={indicator}
                    style={indicatorStyle}
                />
            )}
        </TabGroupRoot>
    );
}
