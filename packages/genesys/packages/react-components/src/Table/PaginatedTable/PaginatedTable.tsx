import { PaginatedTableProps } from "./PaginatedTable.types";
import { PaginatedTableFooter } from "./PaginatedTableFooter";
import { PaginatedTableRoot } from "./PaginatedTable.styles";
import {
    PaginationState,
    OnChangeFn,
    getPaginationRowModel as reactTableGetPaginationRowModel,
} from "@tanstack/react-table";
import { useRef, useState } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const PaginatedTable = (props: PaginatedTableProps): JSX.Element => {
    const {
        Pagination,
        Count,
        state,
        pageSize,
        pageIndex: pageIndexProp,
        onPaginationChange,
        data,
        getPaginationRowModel: getPaginationRowModelProp,
        ...rest
    } = useMergeDefaultProps("PaginatedTable", props);

    const getPaginationRowModel = useRef(
        getPaginationRowModelProp || reactTableGetPaginationRowModel(),
    ).current;

    const [pageIndexState, setPageIndexState] = useState(0);
    const pageIndex = pageIndexProp ?? pageIndexState;

    const handlePaginationChange: OnChangeFn<PaginationState> = (updater) => {
        const paginationState =
            typeof updater === "function" ? updater({ pageIndex, pageSize }) : updater;
        onPaginationChange?.(paginationState);
        if (!pageIndexProp) setPageIndexState(paginationState.pageIndex);
    };

    return (
        <PaginatedTableRoot
            footer={<PaginatedTableFooter Pagination={Pagination} Count={Count} />}
            data={data}
            state={{
                ...state,
                pagination: state?.pagination || { pageIndex, pageSize },
            }}
            getPaginationRowModel={getPaginationRowModel}
            onPaginationChange={handlePaginationChange}
            {...rest}
        />
    );
};

export default PaginatedTable;
