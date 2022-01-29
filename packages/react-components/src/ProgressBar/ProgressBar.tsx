import React from "react";
import { cx } from "../utils/cx";
import {
    LoadingProgressBarContainer,
    LoadingProgressBarTrack1,
    LoadingProgressBarTrack2,
    ProgressBarRoot,
    ProgressBarTrack,
} from "./ProgressBar.styles";
import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBarLoadingTrack = (): JSX.Element => (
    <>
        <LoadingProgressBarTrack1 />
        <LoadingProgressBarTrack2 />
    </>
);

export const ProgressBar = ({ value, className, style }: ProgressBarProps): JSX.Element => {
    return (
        <ProgressBarRoot className={cx("ProgressBar", className)} style={style} role="progressbar">
            <LoadingProgressBarContainer className="ProgressBarTrack">
                {value === undefined ? (
                    <ProgressBarLoadingTrack />
                ) : (
                    <ProgressBarTrack className="ProgressBarTrack" style={{ transform: `translateY(-50%) scaleX(${value}%)` }} />
                )}
            </LoadingProgressBarContainer>
        </ProgressBarRoot>
    );
};
