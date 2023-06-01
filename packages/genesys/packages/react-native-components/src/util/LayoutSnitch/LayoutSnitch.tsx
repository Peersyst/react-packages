import { LayoutChangeEvent, LayoutRectangle } from "react-native";
import { LayoutSnitchProps } from "./LayoutSnitch.types";
import { cloneElement, useState } from "react";

const LayoutSnitch = ({ onLayout, children }: LayoutSnitchProps) => {
    const [layout, setLayout] = useState<LayoutRectangle | undefined>(undefined);

    return cloneElement(children, {
        ...children.props,
        onLayout: (event: LayoutChangeEvent) => {
            onLayout?.(event);
            children.props.onLayout?.(event);
            setLayout(event.nativeEvent.layout);
        },
        style: [
            children.props.style,
            layout === undefined && {
                opacity: 0,
                position: "absolute",
                height: undefined,
                minHeight: undefined,
                maxHeight: undefined,
                width: undefined,
                minWidth: undefined,
                maxWidth: undefined,
            },
        ],
    });
};

export default LayoutSnitch;
