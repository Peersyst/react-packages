import { BasePalette } from "./palette.types";

export const blue = "#5F8AFA";
export const info = "#0288D1";
export const success = "#96B84B";
export const warning = "#F57C00";
export const error = "#DB5555";

export const basePalette: BasePalette = {
    primary: blue,
    status: {
        info,
        error,
        warning,
        success,
    },
};
