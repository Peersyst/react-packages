import { StatusBarProps } from "./StatusBar.types";
import { useTheme } from "@peersyst/react-native-styled";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar as NativeStatusBar } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const StatusBar = (props: StatusBarProps): JSX.Element => {
    const { appearance: appearanceProp, ...rest } = useMergeDefaultProps("StatusBar", props);

    const {
        palette: { mode },
    } = useTheme();

    const appearance = appearanceProp || mode;
    NativeStatusBar.setBarStyle(appearance === "dark" ? "light-content" : "dark-content");

    return <ExpoStatusBar style={appearance === "dark" ? "light" : "dark"} translucent {...rest} />;
};

export default StatusBar;
