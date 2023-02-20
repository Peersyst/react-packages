import styled from "@peersyst/react-native-styled";
import { FlexAlignType, View } from "react-native";
import { Row } from "../../layout/Row";
import {
    ContainedSuspenseContentProps,
    ContainedSuspenseLoaderProps,
    ContainedSuspenseProps,
} from "./ContainedSuspense.types";

const CONTAINED_SUSPENSE_LOADER_ALIGNMENTS: Record<
    NonNullable<ContainedSuspenseProps["activityIndicatorAlignment"]>,
    FlexAlignType
> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
};

export const ContainedSuspenseLoader = styled(Row, {
    alignItems: "center",
    justifyContent: "center",
})<ContainedSuspenseLoaderProps>(({ activityIndicatorAlignment }) => ({
    position: "absolute",
    alignSelf: CONTAINED_SUSPENSE_LOADER_ALIGNMENTS[activityIndicatorAlignment],
}));

export const ContainedSuspenseRoot = styled(View)(() => ({
    justifyContent: "center",
    flex: 1,
}));

export const ContainedSuspenseContent = styled(View)<ContainedSuspenseContentProps>(
    ({ isLoading }) => ({
        opacity: isLoading ? 0 : 1,
        flex: 1,
    }),
);
