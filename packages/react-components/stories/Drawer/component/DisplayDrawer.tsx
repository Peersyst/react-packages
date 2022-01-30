import { Col, Drawer, DrawerProps } from "../../../src";

function DisplayDrawer(props: Omit<DrawerProps, "children">): JSX.Element {
    return (
        <Drawer {...props}>
            <Col gap={20} style={{ padding: "20px" }}>
                <h3>Item 1</h3>
                <h3>Item 2</h3>
                <h3>Item 3</h3>
            </Col>
        </Drawer>
    );
}

export default DisplayDrawer;
