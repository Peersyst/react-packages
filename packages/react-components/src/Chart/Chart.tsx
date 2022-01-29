import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartProps } from "./Chart.types";

if (process.env.NODE_ENV === "test") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Highcharts.useSerialIds(true);
}

export function Chart(props: ChartProps): JSX.Element {
    return <HighchartsReact highcharts={Highcharts} {...props} />;
}
