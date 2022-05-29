import { Theme } from "@peersyst/react-native-styled";
import { ScaledSize } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export type SX<TStyle> = (theme: Theme) => TStyle;

// eslint-disable-next-line @typescript-eslint/ban-types
export type StyledFunction<P extends { style?: P["style"] }, E = {}> = (
    p: { theme: Theme } & { dimensions: ScaledSize; safeAreaInsets: EdgeInsets } & E,
) => P["style"];
