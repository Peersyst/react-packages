import { GridRoot } from "./Grid.styles";
import { Property } from "csstype";
import { GridProps } from "./Grid.types";
import { useGridResize, useGridState, useSortedBreakpoints } from "../hook";
import { getColGap, getRowGap, getRowSize } from "../util";

const Grid = (props: GridProps): JSX.Element => {
    const [gridState, setGridState] = useGridState();

    const sortedBreakpoints = useSortedBreakpoints(props.breakpoints, {
        rowSize: props.rowSize,
        colGap: props.colGap,
        rowGap: props.rowGap,
        cols: props.cols,
        alignItems: props.alignItems,
        justifyItems: props.justifyItems,
        justifyContent: props.justifyContent,
    });

    const setPatterns = (reset?: boolean): void => {
        const width = window.innerWidth;
        let columns = props.cols;
        let rowSize: number | string | undefined = props.rowSize;
        let colGap: number | string | undefined = props.colGap;
        let rowGap: number | string | undefined = props.rowGap;
        let alignItems: Property.AlignItems | undefined = props.alignItems;
        let justifyItems: Property.JustifyItems | undefined = props.justifyItems;
        let justifyContent: Property.AlignItems | undefined = props.justifyContent;
        let activeBreakpoint;

        for (const breakpoint of sortedBreakpoints) {
            if (width < breakpoint.maxWidth) {
                columns = breakpoint.cols;
                rowSize = getRowSize(
                    breakpoint,
                    gridState.activeBreakpoint,
                    gridState.rowSize,
                    props.rowSize,
                );
                colGap = getColGap(
                    breakpoint,
                    gridState.activeBreakpoint,
                    gridState.colGap,
                    props.colGap,
                );
                rowGap = getRowGap(
                    breakpoint,
                    gridState.activeBreakpoint,
                    gridState.rowGap,
                    props.rowGap,
                );
                if (breakpoint.alignItems) alignItems = breakpoint.alignItems;
                if (breakpoint.justifyItems) justifyItems = breakpoint.justifyItems;
                if (breakpoint.justifyContent) justifyContent = breakpoint.justifyContent;
                activeBreakpoint = breakpoint.maxWidth;
                break;
            }
        }

        if (reset || activeBreakpoint !== gridState.activeBreakpoint) {
            setGridState({
                activeBreakpoint,
                rowGap,
                rowSize,
                colGap,
                columns,
                alignItems,
                justifyItems,
                justifyContent,
            });
        }
    };

    useGridResize(setPatterns, sortedBreakpoints, gridState);

    return (
        <GridRoot
            columns={gridState.columns}
            rowSize={gridState.rowSize}
            colGap={gridState.colGap}
            rowGap={gridState.rowGap}
            alignItems={gridState.alignItems}
            justifyItems={gridState.justifyItems}
            justifyContent={gridState.justifyContent}
            className={props.className}
            style={props.style}
            role="grid"
        >
            {props.children}
        </GridRoot>
    );
};

export default Grid;
