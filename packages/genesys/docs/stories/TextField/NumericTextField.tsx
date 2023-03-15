import { TextField } from "@peersyst/react-components";
import { useNumericInput } from "@peersyst/react-components-core";

export default function NumericTextField(): JSX.Element {
    const { format, parse } = useNumericInput();

    return <TextField format={format} parse={parse} />;
}
