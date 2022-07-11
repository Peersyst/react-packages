import { Button, createDrawer, useDrawer } from "@peersyst/react-components";
import DisplayDrawer from "./DisplayDrawer";

function ShowControlledDrawer(): JSX.Element {
    const { showDrawer } = useDrawer();

    return (
        <Button onClick={() => showDrawer(createDrawer(DisplayDrawer))}>
            Show Uncontrolled Drawer
        </Button>
    );
}

export default ShowControlledDrawer;
