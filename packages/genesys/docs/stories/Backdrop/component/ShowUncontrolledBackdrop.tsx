import { Button, Row, useBackdrop, Backdrop, createBackdrop } from "@peersyst/react-components";

function ShowUncontrolledBackdrop(): JSX.Element {
    const { showBackdrop } = useBackdrop();

    return (
        <Row justifyContent="center">
            <Button onClick={() => showBackdrop(createBackdrop(Backdrop))}>
                Show Uncontrolled Backdrop
            </Button>
        </Row>
    );
}

export default ShowUncontrolledBackdrop;
