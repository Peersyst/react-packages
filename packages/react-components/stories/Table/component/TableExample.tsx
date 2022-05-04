import { Table, TableCol } from "../../../src";

interface TableDef {
    id: number;
    name: string;
    price: string;
    day: string;
    week: string;
    marketCap: string;
}

const rows: TableDef[] = [
    {
        id: 1,
        name: "Bitcoin",
        price: "$41,950.05",
        day: "-0.75%",
        week: "-10.72%",
        marketCap: "$791,972,232,024",
    },
    {
        id: 2,
        name: "Ethereum",
        price: "$3,220.44",
        day: "-0.36%",
        week: "-13.14%",
        marketCap: "$383,011,161,686",
    },
    {
        id: 3,
        name: "Tether",
        price: "$1.00",
        day: "+0.02%",
        week: "-0.01%",
        marketCap: "$78,314,983,639",
    },
    {
        id: 4,
        name: "Binance Coin",
        price: "$455.94",
        day: "+0.53%",
        week: "-11.43%",
        marketCap: "$76,051,330,856",
    },
    {
        id: 5,
        name: "Solana",
        price: "$146.42",
        day: "+5.11%",
        week: "-14.84%",
        marketCap: "$45,561,330,802",
    },
    {
        id: 6,
        name: "Cardano",
        price: "$1.24",
        day: "+0.46%",
        week: "-6.20%",
        marketCap: "$41,495,856,768",
    },
    {
        id: 7,
        name: "USD Coin",
        price: "$0.9998",
        day: "-0.00%",
        week: "-0.03%",
        marketCap: "$39,824,757,012",
    },
    {
        id: 8,
        name: "XRP",
        price: "$0.766",
        day: "-0.95%",
        week: "-8.82%",
        marketCap: "$36,450,073,918",
    },
    {
        id: 9,
        name: "Terra",
        price: "$70.51",
        day: "-1.72%",
        week: "-19.85%",
        marketCap: "$25,279,864,003",
    },
    {
        id: 10,
        name: "Polcadot",
        price: "$25.25",
        day: "-1.13%",
        week: "-6.79%",
        marketCap: "$24,895,827,088",
    },
];

const columns: TableCol<TableDef>[] = [
    {
        field: "id",
        title: "ID",
        width: "50px",
    },
    {
        field: "name",
        title: "Name",
        width: "150px",
    },
    {
        field: "price",
        title: "Price",
        width: "150px",
        alignment: "right",
    },
    {
        field: "day",
        title: "24h %",
        width: "100px",
    },
    {
        field: "week",
        title: "7d %",
        width: "100px",
    },
    {
        field: "marketCap",
        title: "Market Cap",
        width: "150px",
        alignment: "right",
    },
];

const TableExample = () => {
    return (
        <div style={{ height: "400px" }}>
            <Table<TableDef>
                emptyElement={<h2>No elements</h2>}
                rows={rows}
                columns={columns}
                footer="Footer content"
            />
        </div>
    );
};

export default TableExample;
