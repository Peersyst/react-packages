import { Button, useDrawer } from "@peersyst/react-components";
import DisplayDrawer from "./DisplayDrawer";

function ShowControlledDrawer(): JSX.Element {
    const { showDrawer } = useDrawer();

    return (
        <Button onClick={() => showDrawer(DisplayDrawer, { name: "drawer" })}>
            Show Uncontrolled Drawer
        </Button>
    );
}

export default ShowControlledDrawer;
