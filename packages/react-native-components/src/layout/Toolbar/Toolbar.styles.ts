import styled from "@peersyst/react-native-styled";
import { Row } from "../Row";
import { ToolbarRootProps } from "./Toolbar.types";

export const ToolbarRoot = styled(Row)<ToolbarRootProps>(({ height }) => ({
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    height,
}));
