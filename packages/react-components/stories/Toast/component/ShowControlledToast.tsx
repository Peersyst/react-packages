import { useState } from "react";
import { Button, Toast } from "../../../src";

const ShowControlledToast = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Controlled Toast</Button>
            <Toast message="I'm controlled!" open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default ShowControlledToast;
