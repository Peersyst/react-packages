import { useState } from "react";
import { Row, RangeSlider, TextField } from "../../../src";

const ControlledRangeSlider = () => {
    const [value, setValue] = useState({ min: 0, max: 100 });
    return (
        <Row
            justifyContent="space-between"
            alignItems="center"
            gap={20}
            breakpoint={{ width: "mini" }}
        >
            <RangeSlider min={0} max={100} onChange={setValue} value={value} />
            <TextField
                type="number"
                validators="gte0|lte100"
                value={value.min.toString()}
                onChange={(v) => setValue({ ...value, min: Number(v) })}
                style={{ width: "100px" }}
            />
            <TextField
                type="number"
                validators="gte0|lte100"
                value={value.max.toString()}
                onChange={(v) => setValue({ ...value, max: Number(v) })}
                style={{ width: "100px" }}
            />
        </Row>
    );
};

export default ControlledRangeSlider;
