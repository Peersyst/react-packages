import { Button, Row, useDrawer, DrawerProps, createDrawer } from "@peersyst/react-components";
import DisplayDrawer from "./DisplayDrawer";

function DrawerTypes(): JSX.Element {
    const { showDrawer } = useDrawer();

    const handleOpen = (position: DrawerProps["position"]) =>
        showDrawer(createDrawer(DisplayDrawer), {
            position,
            size: { size: 300 },
        });

    return (
        <Row justifyContent="space-evenly">
            <Button onClick={() => handleOpen("left")}>Left</Button>
            <Button onClick={() => handleOpen("top")}>Top</Button>
            <Button onClick={() => handleOpen("right")}>Right</Button>
            <Button onClick={() => handleOpen("bottom")}>Bottom</Button>
        </Row>
    );
}

export default DrawerTypes;