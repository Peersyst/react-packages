import { createTheme } from "@peersyst/react-native-components";
import { baseTheme } from "./baseTheme";
import { lightPalette } from "./palette/lightPalette";

const lightTheme = createTheme({ ...baseTheme, palette: lightPalette });

export default lightTheme;
