import React, { Children, ReactNode } from "react";
import BaseGrid from "../BaseGrid";
import { Property } from "csstype";
import { IrregularGridRoot } from "./IrregularGrid.styles";
import { IrregularGridBreakpoint, IrregularGridProps, IrregularGridState } from "./IrregularGrid.types";

export class IrregularGrid extends BaseGrid<IrregularGridProps, IrregularGridState> {
    state: IrregularGridState = {
        mounted: false,
        pattern: [],
        rowSize: undefined,
        colGap: undefined,
        rowGap: undefined,
        activeBreakpoint: undefined,
        columns: 0,
        cells: 0,
        alignItems: undefined,
        justifyItems: undefined,
        justifyContent: undefined,
    };

    sortedBreakpoints: IrregularGridBreakpoint[] = [];

    componentDidMount(): void {
        const { pattern, rowSize, colGap, rowGap, cols, alignItems, justifyItems, justifyContent } = this.props;

        this.sortedBreakpoints =
            this.props.breakpoints?.sort((firstEl: IrregularGridBreakpoint, secondEl: IrregularGridBreakpoint) =>
                firstEl.maxWidth < secondEl.maxWidth ? -1 : 1,
            ) || [];
        this.sortedBreakpoints.push({
            maxWidth: Infinity,
            pattern,
            rowSize,
            colGap,
            rowGap,
            cols,
            alignItems,
            justifyItems,
            justifyContent,
        });
        this.setState({ mounted: true }, () => this.setPatterns());
        window.addEventListener("resize", () => this.setPatterns());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => this.setPatterns());
        this.setState({ mounted: false });
    }

    setCells(): void {
        const cells = [...Array(this.state.columns)].reduce(
            (p: number, _c: number, i: number) => p + this.getColFlex(this.state.pattern[i]),
            0,
        );
        this.setState({ cells });
    }

    setPatterns(): void {
        if (this.state.mounted) {
            const width = window.innerWidth;
            let columns = this.props.cols;
            let pattern = this.props.pattern;
            let rowSize: number | string | undefined = this.props.rowSize;
            let colGap: number | undefined = this.props.colGap;
            let rowGap: number | undefined = this.props.rowGap;
            let alignItems: Property.AlignItems | undefined = this.props.alignItems;
            let justifyItems: Property.JustifyItems | undefined = this.props.justifyItems;
            let justifyContent: Property.AlignItems | undefined = this.props.justifyContent;
            let activeBreakpoint;

            for (const breakpoint of this.sortedBreakpoints) {
                if (width < breakpoint.maxWidth) {
                    columns = breakpoint.cols;
                    pattern = breakpoint.pattern;
                    rowSize = this.getRowSize(breakpoint);
                    colGap = this.getColGap(breakpoint);
                    rowGap = this.getRowGap(breakpoint);
                    if (breakpoint.alignItems) alignItems = breakpoint.alignItems;
                    if (breakpoint.justifyItems) justifyItems = breakpoint.justifyItems;
                    if (breakpoint.justifyContent) justifyContent = breakpoint.justifyContent;
                    activeBreakpoint = breakpoint.maxWidth;
                    break;
                }
            }

            if (activeBreakpoint !== this.state.activeBreakpoint && this.state.mounted) {
                this.setState(
                    {
                        activeBreakpoint,
                        pattern,
                        rowGap,
                        rowSize,
                        colGap,
                        columns,
                        alignItems,
                        justifyItems,
                        justifyContent,
                    },
                    () => this.setCells(),
                );
            }
        }
    }

    getColFlex(v: number | number[]): number {
        return typeof v === "number" ? v : v[0];
    }

    getRowFlex(v: number | number[]): number {
        return typeof v === "number" ? 1 : v[1] || 1;
    }

    renderElements(): ReactNode {
        const { children } = this.props;
        const { pattern } = this.state;

        const length = pattern.length;
        return Children.map(children, (child: ReactNode, index: number) => {
            const element = pattern[index % length];

            return (
                <>
                    {child && (
                        <div
                            style={{
                                gridColumnEnd: "span " + this.getColFlex(element),
                                gridRowEnd: "span " + this.getRowFlex(element),
                            }}
                            key={index.toString()}
                        >
                            {child}
                        </div>
                    )}
                </>
            );
        });
    }

    render(): JSX.Element {
        const { className, style } = this.props;
        const { pattern, rowSize, colGap, rowGap, cells, alignItems, justifyItems, justifyContent } = this.state;

        return (
            <IrregularGridRoot
                cells={cells}
                rowSize={rowSize}
                colGap={colGap}
                rowGap={rowGap}
                alignItems={alignItems}
                justifyItems={justifyItems}
                justifyContent={justifyContent}
                className={className}
                style={style}
                role="grid"
            >
                {pattern.length > 0 && this.renderElements()}
            </IrregularGridRoot>
        );
    }
}
