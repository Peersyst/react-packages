import { HandleLayoutParams, SwitchCoreStyle, SwitchProps } from "./Switch.types";
import { SwitchElementWrapper, SwitchThumb, SwitchTrack, SwitchWrapper } from "./Switch.styles";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { useEffect, useRef, useState } from "react";
import useSwitchColors from "./hooks/useSwitchColors";

export interface InnerSwitchProps extends Pick<SwitchProps, "animationConfig" | "children"> {
    value: boolean;
    setValue: (value: boolean) => void;
    style: SwitchCoreStyle;
}

const InnerSwitch = ({
    value,
    setValue,
    animationConfig,
    style,
    children,
}: InnerSwitchProps): JSX.Element => {
    // States
    const [wrapperWidth, setWrapperWidth] = useState<number>(0);
    const [thumbWidth, setThumbWidth] = useState<number>(0);

    // Style
    const { trackBgColor, activeTrackBgColor, thumbBgColor, activeThumbBgColor } =
        useSwitchColors(style);
    const { thumb: thumbStyle, ...trackStyle } = style;

    // Base animation
    const baseAnim = useRef(new Animated.Value(0)).current;

    // Trigger animation on value change
    useEffect(() => {
        Animated.timing(baseAnim, {
            toValue: +value,
            duration: 200,
            useNativeDriver: false,
            ...animationConfig,
        }).start();
    }, [value]);

    /**
     * SwitchTrack position animation
     * It cannot be a ref because it has to be updated
     * when the wrapper and track width update
     */
    const tXAnim = baseAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, wrapperWidth - thumbWidth],
    });

    /**
     * Opposite opacity animation
     * used to hide the child element
     * when the switch's value changes
     */
    const opacityAnim = baseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });

    const trackColor = baseAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [trackBgColor, activeTrackBgColor],
    });

    const thumbColor = baseAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [thumbBgColor, activeThumbBgColor],
    });

    const handleChange = () => {
        setValue(!value);
    };

    /**
     * Needed in order to gain knowledge of the humb and track,
     * as their widths may vary, so translations can be performed correctly
     */
    const handleLayout = ({ nativeEvent: { layout: newLayout }, type }: HandleLayoutParams) => {
        if (type === "thumbWidth") setThumbWidth(newLayout.width);
        else setWrapperWidth(newLayout.width);
    };

    return (
        <TouchableWithoutFeedback onPress={handleChange}>
            <SwitchTrack style={{ ...trackStyle, backgroundColor: trackColor }}>
                <SwitchWrapper
                    onLayout={(e) =>
                        handleLayout({
                            nativeEvent: e.nativeEvent,
                            type: "wrapperWidth",
                        })
                    }
                >
                    {value && children && (
                        <SwitchElementWrapper
                            style={{ opacity: baseAnim, justifyContent: "flex-start" }}
                        >
                            {children[0]}
                        </SwitchElementWrapper>
                    )}
                    <SwitchThumb
                        onLayout={(e) =>
                            handleLayout({
                                nativeEvent: e.nativeEvent,
                                type: "thumbWidth",
                            })
                        }
                        style={{
                            transform: [{ translateX: tXAnim }],
                            ...thumbStyle,
                            backgroundColor: thumbColor,
                        }}
                    />
                    {!value && children && (
                        <SwitchElementWrapper
                            style={{ opacity: opacityAnim, justifyContent: "flex-end" }}
                        >
                            {children[1]}
                        </SwitchElementWrapper>
                    )}
                </SwitchWrapper>
            </SwitchTrack>
        </TouchableWithoutFeedback>
    );
};

export default InnerSwitch;
