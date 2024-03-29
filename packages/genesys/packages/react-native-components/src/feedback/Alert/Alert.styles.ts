import styled from "@peersyst/react-native-styled";
import { Paper } from "../../surface/Paper";
import { Icon } from "../../display/Icon";
import { AlertRootProps } from "@peersyst/react-components-core";

export const AlertRoot = styled(Paper)<AlertRootProps>(({ theme, type }) => {
    const statusColor = type && type !== "loading" ? theme.palette.status[type] : undefined;
    return {
        width: "100%",
        justifyContent: "center",
        minHeight: 56,
        borderRadius: theme.borderRadius,
        backgroundColor: statusColor || theme.palette.background,
        elevation: 0,
    };
});

export const AlertAction = styled(Icon)(() => ({
    alignSelf: "flex-end",
}));
