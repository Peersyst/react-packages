import { useState } from "react";
import { Row, Button, Popover } from "@peersyst/react-components";

const ControlledPopover = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Row justifyContent="space-around" alignItems="center" style={{ height: "100px" }}>
            <Popover showOn="click" visible={visible} onShow={() => setVisible(true)}>
                <Popover.Popper style={{ padding: "6px" }}>Hello</Popover.Popper>
                <Popover.Content>
                    <Button>I own the popover</Button>
                </Popover.Content>
            </Popover>
            <Button onClick={() => setVisible(!visible)}>
                {visible ? "Hide popover" : "Show popover"}
            </Button>
        </Row>
    );
};

export default ControlledPopover;
