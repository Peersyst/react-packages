import { Row, Button, Backdrop, useBackdrop } from "../../../src";
import { LoaderIcon } from "../../../src/assets/icons";

function Example(): JSX.Element {
    const { showBackdrop } = useBackdrop();

    return (
        <Row justifyContent="center">
            <Button
                onClick={() =>
                    showBackdrop(Backdrop, {
                        name: "backdrop",
                        children: <LoaderIcon style={{ fontSize: "50px" }} />,
                    })
                }
            >
                Show Example
            </Button>
        </Row>
    );
}

export default Example;
