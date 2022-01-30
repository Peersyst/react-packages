import { Row, Button, Modal, useModal } from "../../../src";

function Example(): JSX.Element {
    const { showModal, hideModal } = useModal();

    return (
        <Row justifyContent="space-evenly">
            <Button
                onClick={() =>
                    showModal(Modal, {
                        name: "fading-modal",
                        animation: "fade",
                        children: (
                            <Button onClick={() => hideModal("fading-modal")}>Close me!</Button>
                        ),
                    })
                }
            >
                Fading Modal
            </Button>
            <Button
                onClick={() =>
                    showModal(Modal, {
                        name: "bottom-modal",
                        animation: "from-bottom",
                        children: (
                            <Button onClick={() => hideModal("bottom-modal")}>Close me!</Button>
                        ),
                    })
                }
            >
                Bottom Modal
            </Button>
        </Row>
    );
}

export default Example;
