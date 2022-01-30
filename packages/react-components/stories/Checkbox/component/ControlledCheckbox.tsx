import { useState } from "react";
import { Checkbox, Row, Button } from "../../../src";

export default function ControlledCheckbox(): JSX.Element {
    const [checked, setChecked] = useState(false);

    return (
        <Row gap={20} justifyContent="space-between" alignItems="center">
            <Checkbox value={checked} onChange={setChecked} />
            <Button onClick={() => setChecked(!checked)}>
                {checked ? "Uncheck it" : "Check it"}
            </Button>
        </Row>
    );
}
