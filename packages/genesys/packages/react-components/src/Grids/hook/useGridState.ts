import { Dispatch, SetStateAction, useState } from "react";
import { GridState } from "../Grids.types";

export default function (): [GridState, Dispatch<SetStateAction<GridState>>] {
    return useState<GridState>({
        rowSize: undefined,
        colGap: undefined,
        rowGap: undefined,
        activeBreakpoint: undefined,
        columns: 0,
        alignItems: undefined,
        justifyItems: undefined,
        justifyContent: undefined,
    });
}
