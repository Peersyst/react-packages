import { useState } from "react";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

export default function useLayout(): [
    LayoutRectangle | undefined,
    (event: LayoutChangeEvent) => void,
] {
    const [layout, setLayout] = useState<LayoutRectangle>();

    const onLayout = (event: LayoutChangeEvent) => {
        setLayout(event.nativeEvent.layout);
    };

    return [layout, onLayout];
}
