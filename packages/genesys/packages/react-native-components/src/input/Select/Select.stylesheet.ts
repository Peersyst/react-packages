import { StylesheetWithMetadata, stylesheet } from "@peersyst/react-native-styled";
import Select from "./Select";
import { SelectProps } from "./Select.types";

export const selectStylesheet: StylesheetWithMetadata<SelectProps<any>["style"]> = stylesheet(
    Select,
)(({ fromTheme }) => ({
    component: {
        display: {
            color: fromTheme("palette.text"),
            height: 40,
            paddingHorizontal: 15,
            borderRadius: fromTheme("borderRadius"),
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: fromTheme("palette.text"),

            disabled: {
                color: fromTheme("palette.disabled"),
                borderColor: fromTheme("palette.disabled"),
            },
        },
    },
}));
