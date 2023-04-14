import { LogBox } from "react-native";

const CURRENT_COLOR_WARNING = "Invalid props.style key `currentColor`";

LogBox.ignoreLogs([CURRENT_COLOR_WARNING]);

const consoleError = console.error;
console.error = (...args: any[]) => {
    if (args[2]?.startsWith(CURRENT_COLOR_WARNING)) {
        return;
    } else {
        consoleError(...args);
    }
};

import styled from "./styled";

export * from "./accessors";
export * from "./helpers";
export * from "./stylesheet";
export * from "./theme";
export * from "./types";
export { default as styledWithAs } from "./styledWithAs";
export { styled as default };
