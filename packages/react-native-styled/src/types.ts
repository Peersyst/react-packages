/* eslint-disable @typescript-eslint/ban-types */
import { Theme } from "./theme";

export type SX<TStyle> = (theme: Theme) => TStyle;

export type StyledFunction<P extends { sx?: P["sx"]; style?: P["style"] }, E = {}> = P extends {
    sx?: P["sx"];
}
    ? P["sx"]
    : (p: { theme: Theme } & E) => P["style"];
