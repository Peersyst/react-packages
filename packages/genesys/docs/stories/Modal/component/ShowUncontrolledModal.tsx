import { Button, createModal, Modal, Row, useModal } from "@peersyst/react-components";

const ControlledModal = createModal(Modal);

function ShowUncontrolledModal(): JSX.Element {
    const { showModal, hideModal } = useModal();

    return (
        <Row justifyContent="space-around">
            <Button
                onClick={() => {
                    showModal(ControlledModal, {
                        children: (
                            <Button onClick={() => hideModal(ControlledModal.id)}>Close me</Button>
                        ),
                    });
                }}
            >
                Show Modal
            </Button>
        </Row>
    );
}

export default ShowUncontrolledModal;
