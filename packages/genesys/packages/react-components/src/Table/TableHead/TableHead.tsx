import { flexRender } from "@tanstack/react-table";
import {
    TableHeadRoot,
    TableHeader,
    TableSortButton,
    TableHeaderTitle,
    TableHeaderContent,
    TableHeaderSortButtonContainer,
} from "./TableHead.styles";
import { useTable } from "../TableContext";
import { useTheme } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";

const TableHead = forwardRef(function TableHead(_, ref): JSX.Element {
    const {
        icons: { chevronDown: ChevronDown, chevronUp: ChevronUp },
    } = useTheme();

    const { table } = useTable();

    const headerGroups = table.getHeaderGroups();

    return (
        <TableHeadRoot className="TableHead" ref={(r) => setRef(ref, r)}>
            {headerGroups.map((headerGroup) => (
                <tr className="TableRow TableHeadRow" key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        const headerContext = header.getContext();
                        const column = header.column;
                        const columnDef = column.columnDef;
                        const canSort = column.getCanSort();
                        const sorting = column.getIsSorted();
                        const alignment = columnDef.alignHeader || columnDef.align || "left";

                        return (
                            <TableHeader
                                className="TableHeader"
                                key={header.id}
                                colSpan={header.colSpan}
                                style={{
                                    width: header.getSize(),
                                }}
                                canSort={canSort}
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                <TableHeaderContent
                                    alignment={alignment}
                                    alignItems="center"
                                    gap="0.25rem"
                                >
                                    <TableHeaderTitle alignment={alignment}>
                                        {flexRender(columnDef.header, headerContext)}
                                    </TableHeaderTitle>
                                    {canSort && (
                                        <TableHeaderSortButtonContainer
                                            isSorted={!!sorting}
                                            className="TableHeaderSortButtonContainer"
                                        >
                                            <TableSortButton
                                                className="TableHeaderSortButton"
                                                active={!!sorting}
                                            >
                                                {sorting === "desc" ? (
                                                    <ChevronDown />
                                                ) : (
                                                    <ChevronUp />
                                                )}
                                            </TableSortButton>
                                        </TableHeaderSortButtonContainer>
                                    )}
                                </TableHeaderContent>
                            </TableHeader>
                        );
                    })}
                </tr>
            ))}
        </TableHeadRoot>
    );
});

export default TableHead;
