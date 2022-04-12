import { useState } from "react";
import { Button, Col, MiniDrawer, Typography } from "../../../src";

function ShowControlledMiniDrawer(): JSX.Element {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Button onClick={() => setExpanded(!expanded)}>Toggle Mini Drawer</Button>
            <MiniDrawer expanded={expanded} position="right">
                <Col gap={20} style={{ padding: "20px" }}>
                    <Typography variant="h5" singleLine>
                        Item 1
                    </Typography>
                    <Typography variant="h5" singleLine>
                        Item 3
                    </Typography>
                    <Typography variant="h5" singleLine>
                        Item 2
                    </Typography>
                </Col>
            </MiniDrawer>
        </>
    );
}

export default ShowControlledMiniDrawer;
