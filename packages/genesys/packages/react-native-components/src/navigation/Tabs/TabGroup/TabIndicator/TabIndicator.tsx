import { cloneElement, useContext, useEffect, useRef, useState } from "react";
import { Indicator, TabIndicatorRoot } from "./TabIndicator.styles";
import { TabsContext } from "../../TabsContext";
import { TabIndicatorProps } from "./TabIndicator.types";
import { Animated } from "react-native";

const AnimatedTabIndicatorRoot = Animated.createAnimatedComponent(TabIndicatorRoot);

export default function TabIndicator({
    tabGroupLayout,
    style,
    indicator = <Indicator />,
}: TabIndicatorProps): JSX.Element {
    const [tabWidth, setTabWidth] = useState<number>(0);
    const [tabX, setTabX] = useState<number>(0);
    const [tabGroupX, setTabGroupX] = useState<number>(0);

    const { activeLayout } = useContext(TabsContext);

    useEffect(() => {
        const { width, x } = activeLayout || {
            width: 0,
            x: 0,
        };
        setTabWidth(width);
        setTabX(x);
        setTabGroupX(tabGroupLayout?.x || 0);
    }, [activeLayout, tabGroupLayout]);

    const widthAnim = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.timing(widthAnim, {
            toValue: tabWidth,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [tabWidth]);

    const posAnim = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.timing(posAnim, {
            toValue: tabX - tabGroupX,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [tabX, tabGroupX]);

    return (
        <AnimatedTabIndicatorRoot style={{ width: widthAnim, left: posAnim, ...style }}>
            {cloneElement(indicator, {
                ...indicator?.props,
                style: { ...indicator?.props.style, flex: 1 },
            })}
        </AnimatedTabIndicatorRoot>
    );
}
