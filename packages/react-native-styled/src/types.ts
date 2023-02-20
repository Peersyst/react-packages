import { Theme } from "@peersyst/react-native-styled";
import { ScaledSize } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export type SX<TStyle> = (p: {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
}) => TStyle;

export type StyledFunction<P extends { style?: P["style"] }, E = {}> = (
    p: { theme: Theme; dimensions: ScaledSize; safeAreaInsets: EdgeInsets } & E,
) => P["style"];

export type StyledComponentProps<S> = { sx?: SX<S>; style?: S };
