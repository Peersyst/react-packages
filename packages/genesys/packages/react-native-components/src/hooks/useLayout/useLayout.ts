import { useState } from "react";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

export default function useLayout(): [
    LayoutRectangle | undefined,
    (event: LayoutChangeEvent) => void,
] {
    const [layout, setLayout] = useState<LayoutRectangle>();

    const onLayout = (event: LayoutChangeEvent) => {
        const eventLayout = event.nativeEvent.layout;
        if (
            !layout ||
            Object.entries(eventLayout).some(
                ([key, value]) =>
                    Math.round(value) !== Math.round(layout[key as keyof LayoutRectangle]),
            )
        )
            setLayout(event.nativeEvent.layout);
    };

    return [layout, onLayout];
}
