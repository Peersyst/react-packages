// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import { PaginatedTable, TableProps } from "../../src";
import { Person, data } from "./Table.utils";
import { PaginationState, SortingState } from "@tanstack/react-table";

const ManualPaginationTable = (props: Omit<TableProps, "data">) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [manualData, setManualData] = useState<Person[]>([]);
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 30 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (manualData.length > 0) {
            setLoading(true);
            setTimeout(() => {
                setManualData(
                    [...data]
                        .reverse()
                        .slice(
                            pagination.pageIndex * pagination.pageSize,
                            (pagination.pageIndex + 1) * pagination.pageSize,
                        ),
                );
                setLoading(false);
            }, 2000);
        }
    }, [sorting]);

    useEffect(() => {
        if (manualData.length > 0) {
            setLoading(true);
            setTimeout(() => {
                setManualData(
                    data.slice(
                        pagination.pageIndex * pagination.pageSize,
                        (pagination.pageIndex + 1) * pagination.pageSize,
                    ),
                );
                setLoading(false);
            }, 2000);
        }
    }, [pagination]);

    useEffect(() => {
        setTimeout(() => {
            setManualData(data.slice(0, pagination.pageSize));
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <PaginatedTable
            style={{ height: "400px" }}
            loading={loading}
            manualSorting
            onSortingChange={setSorting}
            manualPagination
            onPaginationChange={setPagination}
            pageSize={30}
            pageCount={34}
            rowCount={1000}
            data={manualData}
            {...props}
        />
    );
};

export default ManualPaginationTable;
