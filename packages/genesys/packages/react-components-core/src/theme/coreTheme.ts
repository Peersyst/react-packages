import { BaseCoreTheme } from "./theme.types";

export const coreTheme: Omit<BaseCoreTheme, "typography" | "borderRadius" | "icons"> = {
    palette: {
        mode: "light",
        primary: "rgb(97, 219, 251)",
        disabled: "rgb(149,149,149)",
        background: "rgb(255, 255, 255)",
        backdrop: "rgba(0, 0, 0, 0.5)",
        text: "rgb(0, 0, 0)",
        status: {
            info: "rgb(2, 136, 209)",
            error: "rgb(211, 47, 47)",
            warning: "rgb(237, 108, 2)",
            success: "rgb(46, 125, 50)",
        },
    },
    zIndex: {
        header: 1,
        appBar: 2,
        popover: 200,
        modal: 100,
        selectMenu: 5,
        toast: 9999,
    },
};
