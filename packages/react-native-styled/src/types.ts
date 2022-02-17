import { Theme } from "@peersyst/react-native-styled";

export type SX<TStyle> = (theme: Theme) => TStyle;

// eslint-disable-next-line @typescript-eslint/ban-types
export type StyledFunction<P extends { style?: P["style"] }, E = {}> = (
    p: { theme: Theme } & E,
) => P["style"];
