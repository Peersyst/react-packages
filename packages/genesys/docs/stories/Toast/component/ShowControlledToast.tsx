import { useState } from "react";
import { Button, Toast } from "@peersyst/react-components";

const ShowControlledToast = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Controlled Toast</Button>
            <Toast content="I'm controlled!" open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default ShowControlledToast;
