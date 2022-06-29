/* eslint-disable @typescript-eslint/no-empty-interface */
import { TextStyle } from "react-native";
import { ToastPosition } from "../feedback/Toast";
import { CreateTheme as CoreCreateTheme } from "@peersyst/react-components-core";
import { Shadow } from "./theme.types";

export interface CreateDefaultTheme extends CoreCreateTheme<TextStyle, ToastPosition, number> {
    shadows?: Shadow[];
}
export interface CreateTheme extends CreateDefaultTheme {}
