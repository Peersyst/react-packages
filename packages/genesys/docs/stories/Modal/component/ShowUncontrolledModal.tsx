import { Button, Modal, Row, useModal } from "@peersyst/react-components";

function ShowUncontrolledModal(): JSX.Element {
    const { showModal, hideModal } = useModal();

    return (
        <Row justifyContent="space-around">
            <Button
                onClick={() => {
                    showModal(Modal, {
                        name: "modal",
                        children: <Button onClick={() => hideModal("modal")}>Close me</Button>,
                    });
                }}
            >
                Show Modal
            </Button>
        </Row>
    );
}

export default ShowUncontrolledModal;
