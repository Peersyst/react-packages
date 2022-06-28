import { ReactNode } from "react";
import { CoreFormProps } from "@peersyst/react-components-core";
import { StyleProp, ViewStyle } from "react-native";

export interface FormProps extends CoreFormProps {
    /**
     * Form style
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Form children
     */
    children: ReactNode;
}
