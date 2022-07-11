import { useState } from "react";
import { Row, Slider, TextField } from "@peersyst/react-components";

const ControlledSlider = () => {
    const [value, setValue] = useState(0);

    return (
        <Row
            justifyContent="space-between"
            alignItems="center"
            gap={20}
            breakpoint={{ width: "mini" }}
        >
            <Slider min={0} max={100} value={value} onChange={setValue} style={{ flex: 1 }} />
            <TextField
                type="number"
                validators={{ gte: 0, lte: 100 }}
                value={value.toString()}
                onChange={(v) => setValue(Number(v))}
                style={{ width: "100px" }}
            />
        </Row>
    );
};

export default ControlledSlider;
