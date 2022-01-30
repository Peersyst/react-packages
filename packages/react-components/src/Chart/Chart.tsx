import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartProps } from "./Chart.types";

if (process.env.NODE_ENV === "test") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Highcharts.useSerialIds(true);
}

export default function Chart(props: ChartProps): JSX.Element {
    return <HighchartsReact highcharts={Highcharts} {...props} />;
}
