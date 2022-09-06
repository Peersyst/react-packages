import { ViewProps, ViewStyle } from "react-native";
import { CorePaperProps, Elevation } from "@peersyst/react-components-core";

export type PaperProps = ViewProps &
    CorePaperProps & {
        /**
         * Paper styles
         */
        style?: ViewStyle;
    };

export interface PaperRootProps {
    elevation: Elevation;
    square: boolean;
}

export type PaperOverlayProps = PaperRootProps;
