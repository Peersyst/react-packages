import { View } from "react-native";
import styled from "@peersyst/react-native-styled";
import { SelectItemTextProps } from "./SelectItem.types";
import { ElementStyler } from "../../../util/ElementStyler";

export const SelectItemRoot = styled(View)(() => ({
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "center",
}));

export const SelectItemText = styled(ElementStyler)<SelectItemTextProps>(
    ({ theme, isClearItem }) => ({
        color: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
        fontStyle: isClearItem ? "italic" : "normal",
    }),
);
