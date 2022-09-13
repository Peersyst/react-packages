import { GlobalStyles } from "../globalStyles.types";
import { useConfig, useTheme } from "@peersyst/react-components-core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import { CreateGlobalStylesParams } from "../globalStyles.types";

export default function (): GlobalStyles {
    const globalStyles = useConfig("globalStyles");

    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const safeAreaInsets = useSafeAreaInsets();

    const createGlobalStylesParams: CreateGlobalStylesParams = {
        theme,
        dimensions,
        safeAreaInsets,
    };

    return globalStyles(createGlobalStylesParams);
}
