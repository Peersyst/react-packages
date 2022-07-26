import { Row, Button, Modal, useModal, createModal } from "@peersyst/react-components";

const ExampleModal = createModal(Modal);

function Example(): JSX.Element {
    const { showModal, hideModal } = useModal();

    return (
        <Row justifyContent="space-evenly">
            <Button
                onClick={() =>
                    showModal(ExampleModal, {
                        animation: "fade",
                        children: (
                            <Button onClick={() => hideModal(ExampleModal.id)}>Close me!</Button>
                        ),
                    })
                }
            >
                Fading Modal
            </Button>
            <Button
                onClick={() =>
                    showModal(ExampleModal, {
                        animation: "from-bottom",
                        children: (
                            <Button onClick={() => hideModal(ExampleModal.id)}>Close me!</Button>
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
