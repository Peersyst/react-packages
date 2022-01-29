import React from "react";
import { Popover, Button } from "../../../src";

const Example = () => {
    return (
        <Popover showOn="click">
            <Popover.Popper style={{ padding: "6px" }}>Hello what's up</Popover.Popper>
            <Popover.Content>
                <Button>Show popover</Button>
            </Popover.Content>
        </Popover>
    );
};

export default Example;
