// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { ColumnDef } from "../../src";
import { ColumnSort } from "@tanstack/react-table";

export type Person = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: "relationship" | "complicated" | "single";
    createdAt: Date;
};

export type PersonApiResponse = {
    data: Person[];
    meta: {
        totalRowCount: number;
    };
};

const range = (len: number) => {
    const arr: number[] = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = (index: number): Person => {
    return {
        id: index + 1,
        firstName: `Firstname${index + 1}`,
        lastName: `Lastname${index + 1}`,
        age: index + 1,
        visits: (index + 1) * 100,
        progress: index + 1,
        createdAt: new Date(),
        status: "single",
    };
};

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!;
        return range(len).map((d): Person => {
            return {
                ...newPerson(d),
            };
        });
    };

    return makeDataLevel();
}

export const data = makeData(1000);

export const columns: ColumnDef<Person>[] = [
    {
        accessorKey: "id",
        header: "ID",
        size: 60,
        align: "left",
        alignCells: "left",
    },
    {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
    },
    {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
    },
    {
        accessorKey: "age",
        header: () => "Age",
        size: 50,
    },
    {
        accessorKey: "visits",
        header: () => <span>Visits</span>,
        size: 50,
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "progress",
        header: "Profile Progress",
        size: 80,
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: (info) => info.getValue<Date>().toLocaleString(),
    },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function sort<TData>(data: TData[], _: ColumnSort[]): Promise<TData[]> {
    await new Promise<TData[]>((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
    return [...data.reverse()];
}
