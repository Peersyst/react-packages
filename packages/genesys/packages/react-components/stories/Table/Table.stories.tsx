// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Table } from "../../src";
import { columns, data } from "./Table.utils";
import ManualSortingTable from "./ManualSortingTable";
import ManualPaginationTable from "./ManualPaginationTable";

export default {
    title: "Table",
    component: Table,
};

const Template = (args) => <Table style={{ height: "400px" }} {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    data,
    columns,
};

export const Empty = Template.bind({});
Empty.args = {
    data: [],
    columns,
};

const ManualSortingTemplate = (args) => (
    <ManualSortingTable style={{ height: "400px" }} {...args} />
);

export const ManualSorting = ManualSortingTemplate.bind({});
ManualSorting.args = {
    columns,
};

const PaginatedTemplate = (args) => <ManualPaginationTable style={{ height: "400px" }} {...args} />;

export const Paginated = PaginatedTemplate.bind({});
Paginated.args = {
    columns,
};
