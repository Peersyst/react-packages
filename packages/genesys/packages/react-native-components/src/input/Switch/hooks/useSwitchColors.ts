import { useTheme } from "@peersyst/react-native-styled";
import { SwitchCoreStyle } from "../Switch.types";
import { emphasize } from "@peersyst/react-utils";

export interface SwitchColors {
    trackBgColor: string;
    activeTrackBgColor: string;
    thumbBgColor: string;
    activeThumbBgColor: string;
}

export default function useSwitchColors(style?: SwitchCoreStyle): SwitchColors {
    const theme = useTheme();
    return {
        trackBgColor: style?.backgroundColor || emphasize(theme.palette.text, 0.5),
        activeTrackBgColor:
            style?.active?.backgroundColor || style?.backgroundColor || theme.palette.primary,
        thumbBgColor: style?.thumb?.backgroundColor || "#FFF",
        activeThumbBgColor:
            style?.active?.thumb?.backgroundColor || style?.thumb?.backgroundColor || "#FFF",
    };
}
