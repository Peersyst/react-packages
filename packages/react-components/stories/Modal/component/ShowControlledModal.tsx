import React, { useState } from "react";
import { Row, Button, Modal } from "../../../src";

function ShowControlledModal(): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <Row justifyContent="center">
            <Button onClick={() => setOpen(true)}>Show Controlled Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Button onClick={() => setOpen(false)}>Close me</Button>
            </Modal>
        </Row>
    );
}

export default ShowControlledModal;
