import { extractTextStyles, extractViewStyles } from "@peersyst/react-native-utils";
import { AnyObject } from "@peersyst/react-types";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export default function useSplitTextAndViewStyles<S extends AnyObject>(
    styles: S,
): [TextStyle, ViewStyle, Omit<S, keyof (TextStyle | ViewStyle)>] {
    return useMemo(() => {
        const [textStyle, otherStyles] = extractTextStyles(styles);
        const [rootStyle, restStyle] = extractViewStyles(otherStyles);

        return [textStyle, rootStyle, restStyle as Omit<S, keyof (TextStyle | ViewStyle)>];
    }, [styles]);
}
