// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import { Person, data, sort } from "./Table.utils";
import { SortingState } from "@tanstack/react-table";
import { Table, TableProps } from "../../../src";

const ManualSortingTable = (props: TableProps) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [manualData, setManualData] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (manualData.length > 0) {
            setLoading(true);
            sort(manualData, sorting).then((sortedData) => {
                setManualData(sortedData);
                setLoading(false);
            });
        }
    }, [sorting]);

    useEffect(() => {
        setTimeout(() => {
            setManualData(data);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Table
            style={{ height: "400px" }}
            loading={loading}
            manualSorting
            {...props}
            onSortingChange={setSorting}
            data={manualData}
        />
    );
};

export default ManualSortingTable;
