import { Button, Row, useBackdrop, Backdrop } from "@peersyst/react-components";

function ShowUncontrolledBackdrop(): JSX.Element {
    const { showBackdrop } = useBackdrop();

    return (
        <Row justifyContent="center">
            <Button
                onClick={() =>
                    showBackdrop(Backdrop, {
                        name: "backdrop",
                    })
                }
            >
                Show Uncontrolled Backdrop
            </Button>
        </Row>
    );
}

export default ShowUncontrolledBackdrop;
