import { useState } from "react";
import { Button } from "@peersyst/react-components";
import DisplayDrawer from "./DisplayDrawer";

function ShowControlledDrawer(): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Controlled Drawer</Button>
            <DisplayDrawer open={open} onClose={() => setOpen(false)} />
        </>
    );
}

export default ShowControlledDrawer;
