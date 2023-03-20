// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Person, columns, data } from "./Table.utils";
import ManualSortingTable from "./ManualSortingTable";
import ManualPaginationTable from "./ManualPaginationTable";
import { Table } from "../../../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Table",
    component: Table,
} as ComponentMeta<typeof Table>;

// eslint-disable-next-line prettier/prettier
const Template: ComponentStory<typeof Table<Person>> = (args) => <Table style={{ height: "400px" }} {...args} />;

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

const ManualSortingTemplate: ComponentStory<typeof ManualSortingTable> = (args) => (
    <ManualSortingTable style={{ height: "400px" }} {...args} />
);

export const ManualSorting = ManualSortingTemplate.bind({});
ManualSorting.args = {
    columns,
};

const PaginatedTemplate: ComponentStory<typeof ManualPaginationTable> = (args) => <ManualPaginationTable style={{ height: "400px" }} {...args} />;

export const Paginated = PaginatedTemplate.bind({});
Paginated.args = {
    columns,
};
