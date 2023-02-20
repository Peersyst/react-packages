import styled from "@peersyst/react-native-styled";
import { FlexAlignType, View } from "react-native";
import { Row } from "../../layout/Row";
import { SuspenseContentProps, SuspenseLoaderProps } from "./Suspense.types";

const SUSPENSE_LOADER_ALIGNMENTS: Record<
    SuspenseLoaderProps["activityIndicatorAlignment"],
    FlexAlignType
> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
};

export const SuspenseLoader = styled(Row, {
    alignItems: "center",
    justifyContent: "center",
})<SuspenseLoaderProps>(({ activityIndicatorAlignment }) => ({
    position: "absolute",
    alignSelf: SUSPENSE_LOADER_ALIGNMENTS[activityIndicatorAlignment],
}));

export const SuspenseRoot = styled(View)(() => ({
    justifyContent: "center",
}));

export const SuspenseContent = styled(View)<SuspenseContentProps>(({ isLoading }) => ({
    opacity: isLoading ? 0 : 1,
}));
