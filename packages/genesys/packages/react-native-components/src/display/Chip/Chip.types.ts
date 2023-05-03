import { ChipVariant, CoreChipProps, ChipSize } from "@peersyst/react-components-core";
import { TouchableWithoutFeedbackProps, TextStyle } from "react-native";
import { GradientViewStyle } from "../../layout/GradientView";

export type ChipRootStyle = GradientViewStyle;

export type ChipTextStyle = TextStyle;

export type BaseChipStyle = ChipRootStyle & ChipTextStyle & { rounded?: ChipRootStyle };

export type ChipVariantStyle = Partial<Record<ChipVariant, BaseChipStyle>>;

export type ChipSizeStyle = Partial<Record<ChipSize, BaseChipStyle>>;

export type ChipStatelessStyle = BaseChipStyle & ChipVariantStyle & ChipSizeStyle;

export type ChipStatefulStyle = {
    disabled?: ChipStatelessStyle;
    pressed?: ChipStatelessStyle;
};

export type ChipStyle = ChipStatelessStyle & ChipStatefulStyle;

export interface ChipProps extends CoreChipProps, Omit<TouchableWithoutFeedbackProps, "children"> {
    /**
     * Whether Chip appears as pressable, does not affect onPress
     */
    pressable?: boolean;
    /**
     * Chip style
     */
    style?: ChipStyle;
}

export interface ChipComps {
    color?: string;
}
