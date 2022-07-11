import BaseGrid from "../BaseGrid";
import { GridRoot } from "./Grid.styles";
import { Property } from "csstype";
import { GridBreakpoint, GridProps, GridState } from "./Grid.types";

export default class Grid extends BaseGrid<GridProps, GridState> {
    state: GridState = {
        mounted: false,
        rowSize: undefined,
        colGap: undefined,
        rowGap: undefined,
        activeBreakpoint: undefined,
        columns: 0,
        alignItems: undefined,
        justifyItems: undefined,
        justifyContent: undefined,
    };

    sortedBreakpoints: GridBreakpoint[] = [];

    componentDidMount(): void {
        this.sortBreakpoints();
        this.setState({ mounted: true }, () => this.setPatterns());
        window.addEventListener("resize", () => this.setPatterns());
    }

    componentWillUnmount() {
        this.setState({ mounted: false });
        window.removeEventListener("resize", () => this.setPatterns());
    }

    componentDidUpdate({
        breakpoints: oldBreakpoints,
        cols: oldCols,
        colGap: oldColGap,
        rowGap: oldRowGap,
        rowSize: oldRowSize,
    }: Readonly<GridProps>) {
        const { breakpoints, colGap, cols, rowGap, rowSize } = this.props;
        if (
            oldBreakpoints !== breakpoints ||
            oldCols !== cols ||
            oldColGap !== colGap ||
            oldRowGap !== rowGap ||
            oldRowSize !== rowSize
        ) {
            this.sortBreakpoints();
            this.setPatterns();
        }
    }

    sortBreakpoints(): void {
        const { rowSize, colGap, rowGap, cols, alignItems, justifyItems, justifyContent } =
            this.props;

        this.sortedBreakpoints =
            this.props.breakpoints?.sort((firstEl: GridBreakpoint, secondEl: GridBreakpoint) =>
                firstEl.maxWidth < secondEl.maxWidth ? -1 : 1,
            ) || [];
        this.sortedBreakpoints.push({
            maxWidth: Infinity,
            rowSize,
            colGap,
            rowGap,
            cols,
            alignItems,
            justifyItems,
            justifyContent,
        });
    }

    setPatterns(): void {
        if (this.state.mounted) {
            const width = window.innerWidth;
            let columns = this.props.cols;
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
                this.setState({
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
        }
    }

    render(): JSX.Element {
        const { className, style, children } = this.props;
        const { rowSize, colGap, rowGap, columns, alignItems, justifyItems, justifyContent } =
            this.state;

        return (
            <GridRoot
                columns={columns}
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
                {children}
            </GridRoot>
        );
    }
}
