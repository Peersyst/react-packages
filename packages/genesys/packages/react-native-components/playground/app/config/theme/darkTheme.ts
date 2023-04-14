import { createTheme } from "@peersyst/react-native-components";
import { baseTheme } from "./baseTheme";
import { darkPalette } from "./palette/darkPalette";

const darkTheme = createTheme({ ...baseTheme, palette: darkPalette });

export default darkTheme;
