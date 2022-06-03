import { Popover, Button, Row, Col } from "../../../src";

const Example = () => {
    return (
        <Popover showOn="hover" position="top" arrow>
            <Popover.Popper style={{ padding: "6px" }}>
                <Col gap={5} style={{ width: 150 }}>
                    <Row style={{ height: 30 }} justifyContent="center" alignItems="center">
                        Option 1
                    </Row>
                    <Row style={{ height: 30 }} justifyContent="center" alignItems="center">
                        Option 2
                    </Row>
                </Col>
            </Popover.Popper>
            <Popover.Content>
                <Button>Show popover</Button>
            </Popover.Content>
        </Popover>
    );
};

export default Example;
