import { ReactElement } from "react";
import { StyleProp } from "react-native";

export interface ElementStylerProps<TProps extends { style?: StyleProp<any> } = any> {
    style?: TProps["style"];
    children: ReactElement<TProps>;
}
