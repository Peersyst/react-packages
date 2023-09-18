import { LayoutChangeEvent, LayoutRectangle, StyleSheet } from "react-native";
import { LayoutSnitchProps } from "./LayoutSnitch.types";
import { cloneElement, useState } from "react";

const LayoutSnitch = ({ reveal = true, onLayout, children }: LayoutSnitchProps) => {
    const [layout, setLayout] = useState<LayoutRectangle | undefined>(undefined);

    const handleLayout = (event: LayoutChangeEvent) => {
        const eventLayout = event.nativeEvent.layout;

        if (
            !layout ||
            Object.entries(eventLayout).some(
                ([key, value]) =>
                    Math.round(value) !== Math.round(layout[key as keyof LayoutRectangle]),
            )
        ) {
            onLayout?.(event);
            children.props.onLayout?.(event);
            setLayout(event.nativeEvent.layout);
        }
    };

    return cloneElement(children, {
        ...children.props,
        onLayout: handleLayout,
        style: StyleSheet.flatten([
            children.props.style,
            layout === undefined &&
                reveal && {
                    opacity: 0,
                    position: "absolute",
                    height: undefined,
                    minHeight: undefined,
                    maxHeight: undefined,
                    width: undefined,
                    minWidth: undefined,
                    maxWidth: undefined,
                },
        ]),
    });
};

export default LayoutSnitch;
