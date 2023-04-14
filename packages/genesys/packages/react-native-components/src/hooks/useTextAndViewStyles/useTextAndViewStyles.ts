import { extractTextStyles, extractViewStyles } from "@peersyst/react-native-utils";
import { AnyObject } from "@peersyst/react-types";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export default function useTextAndViewStyles<S extends AnyObject>(
    styles: S,
): [TextStyle, ViewStyle] {
    return useMemo(() => {
        const [textStyle, otherStyles] = extractTextStyles(styles);
        const [rootStyle] = extractViewStyles(otherStyles);

        return [textStyle, rootStyle];
    }, [styles]);
}
