import { IconButton, useSetTheme, useTheme } from "@peersyst/react-native-components";
import { MoonIcon, SunIcon } from "../icons";

const SwitchThemeButton = () => {
    const theme = useTheme();
    const setTheme = useSetTheme();

    const handleChangeTheme = () => {
        setTheme(theme.palette.mode === "dark" ? "light" : "dark");
    };

    return (
        <IconButton
            onPress={handleChangeTheme}
            style={{ fontSize: theme.palette.mode === "dark" ? 18 : 20, marginRight: 12 }}
        >
            {theme.palette.mode === "dark" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
    );
};

export default SwitchThemeButton;
