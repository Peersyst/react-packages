import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartProps } from "./Chart.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

if (process.env.NODE_ENV === "test") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Highcharts.useSerialIds(true);
}

export default function Chart(props: ChartProps): JSX.Element {
    const mergedProps = useMergeDefaultProps("Chart", props);

    return <HighchartsReact highcharts={Highcharts} {...mergedProps} />;
}
