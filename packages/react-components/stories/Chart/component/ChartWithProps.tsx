import { Chart } from "../../../src";
import * as Highcharts from "highcharts";

interface ChartProps {
    /**
     * Indexer for custom properties
     */
    [key: string]: any;
    /**
     * Flag for `Chart.update` call (Default: true)
     */
    allowChartUpdate?: boolean;
    /**
     * Reference to the chart factory (Default: chart)
     */
    constructorType?: keyof typeof Highcharts;
    /**
     * Properties of the chart container
     */
    containerProps?: { [key: string]: any };
    /**
     * Immutably recreates the chart on receiving new props
     */
    immutable?: boolean;
    /**
     * Highcharts options
     */
    options?: Highcharts.Options;
    /**
     * Flags for `Chart.update` call: redraw, oneToOne, and animation. (Default:
     * [true, true, true])
     */
    updateArgs?: [boolean] | [boolean, boolean] | [boolean, boolean, boolean];
    /**
     * Callback for the chart factory
     */
    callback?: Highcharts.ChartCallbackFunction;
}

export default function ChartWithProps(props: ChartProps): JSX.Element {
    return <Chart {...props} />;
}
