import { Children, ReactNode, useEffect, useState } from "react";
import { Property } from "csstype";
import { IrregularGridRoot } from "./IrregularGrid.styles";
import { IrregularGridProps, Pattern } from "./IrregularGrid.types";
import { useGridResize, useGridState, useSortedBreakpoints } from "../hook";
import { getColFlex, getColGap, getRowFlex, getRowGap, getRowSize } from "../util";

const IrregularGrid = (props: IrregularGridProps): JSX.Element => {
    const [gridState, setGridState] = useGridState();
    const [pattern, setPattern] = useState<Pattern>([]);
    const [cells, setCells] = useState(0);

    const sortedBreakpoints = useSortedBreakpoints(props.breakpoints || [], {
        pattern: props.pattern,
        rowSize: props.rowSize,
        colGap: props.colGap,
        rowGap: props.rowGap,
        cols: props.cols,
        alignItems: props.alignItems,
        justifyItems: props.justifyItems,
        justifyContent: props.justifyContent,
    });

    useEffect(() => {
        const cells = [...Array(gridState.columns)].reduce(
            (p: number, _c: number, i: number) => p + getColFlex(pattern[i]),
            0,
        );
        setCells(cells);
    }, [pattern]);

    const setPatterns = (reset?: boolean): void => {
        const width = window.innerWidth;
        let columns = props.cols;
        let pattern = props.pattern;
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
                pattern = breakpoint.pattern;
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
            setPattern(pattern);
        }
    };

    useGridResize(setPatterns, sortedBreakpoints, gridState);

    const renderElements = (): ReactNode => {
        const length = pattern.length;
        return Children.map(props.children, (child: ReactNode, index: number) => {
            const element = pattern[index % length];

            return (
                <>
                    {child && (
                        <div
                            style={{
                                gridColumnEnd: "span " + getColFlex(element),
                                gridRowEnd: "span " + getRowFlex(element),
                            }}
                            key={index.toString()}
                        >
                            {child}
                        </div>
                    )}
                </>
            );
        });
    };

    return (
        <IrregularGridRoot
            cells={cells}
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
            {pattern.length > 0 && renderElements()}
        </IrregularGridRoot>
    );
};

export default IrregularGrid;
