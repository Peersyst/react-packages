import { ViewStyle } from "react-native";
import { StatelessExpandableDisplayStyle } from "./ExpandableDisplay/ExpandableDisplay.types";
import { StatelessExpandableContentStyle } from "./ExpandableContent";
import { ReactNode } from "react";

export type StatelessExpandableStyle = ViewStyle & {
    $display?: StatelessExpandableDisplayStyle;
    $content?: StatelessExpandableContentStyle;
};

export type ExpandableStyle = StatelessExpandableStyle & {
    $open?: StatelessExpandableStyle;
};

export interface ExpandableProps {
    /**
     * Default open flag
     */
    defaultOpen?: boolean;
    /**
     * Open flag
     */
    open?: boolean;
    /**
     * onOpen handler
     */
    onOpen?: () => unknown;
    /**
     * onClose handler
     */
    onClose?: () => unknown;
    /**
     * Expandable style
     */
    style?: ExpandableStyle;
    /**
     * Expandable elements
     */
    children: ReactNode;
}
