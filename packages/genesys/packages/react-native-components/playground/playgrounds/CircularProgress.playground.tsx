import playground from "../playground";
import { useState } from "react";
import styled, { currentColor } from "@peersyst/react-native-styled";
import { alpha } from "@peersyst/react-utils";
import { CircularProgress, Col, TextField, Typography, useNumericInput } from "../../src";

const StyledCircularProgress = styled(CircularProgress)(() => ({
    size: 120,
    thickness: 4,
    backgroundColor: currentColor((color) => alpha(color, 0.2)),
}));

const Display = () => {
    const [value, setValue] = useState(0);

    const { format, parse } = useNumericInput();

    const handleValueChange = (v: string) => {
        const n = Number(v);
        if (n < 0) setValue(0);
        else if (n > 100) setValue(100);
        else setValue(n);
    };

    return (
        <Col gap={20} alignItems="center" justifyContent="center" style={{ width: "90%" }}>
            <StyledCircularProgress value={value} color="status.success" strokeLinecap="round">
                <Typography variant="h5" fontWeight="bold" color="status.success">
                    {value} %
                </Typography>
            </StyledCircularProgress>
            <TextField
                format={format}
                parse={parse}
                value={value.toString()}
                onChange={handleValueChange}
                style={{ width: 95 }}
                suffix={
                    <Typography variant="body1" fontWeight="bold" light>
                        %
                    </Typography>
                }
            />
        </Col>
    );
};

export default playground("CircularProgress", Display);
