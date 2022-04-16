import styled from "@peersyst/react-native-styled";
import { Row } from "../Row";

export const ToolbarRoot = styled(Row)(({ theme }) => ({
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    height: theme.toolbarHeight,
}));
