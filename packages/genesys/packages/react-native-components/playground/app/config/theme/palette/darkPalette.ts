import { basePalette } from "./basePalette";
import { DarkPalette } from "./palette.types";

export const darkPalette: DarkPalette = {
    ...basePalette,
    mode: "dark",
    text: "#FFFFFF",
    background: "#202020",
    backdrop: "rgba(255, 255, 255, 0.5)",
    disabled: "rgba(255, 255, 255, 0.26)",
};
