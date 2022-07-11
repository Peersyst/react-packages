import { Row, Button, Modal, useModal, createModal } from "@peersyst/react-components";

function Example(): JSX.Element {
    const { showModal, hideModal } = useModal();

    return (
        <Row justifyContent="space-evenly">
            <Button
                onClick={() =>
                    showModal(createModal(Modal), {
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
                    showModal(createModal(Modal), {
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
