import { basePalette } from "./basePalette";
import { LightPalette } from "./palette.types";

export const lightPalette: LightPalette = {
    ...basePalette,
    mode: "light",
    text: "#000000",
    background: "#FFFFFF",
    backdrop: "rgba(0, 0, 0, 0.5)",
    disabled: "rgba(0, 0, 0, 0.26)",
};
