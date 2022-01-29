import { Button, Modal, Row, useModal } from '../../../src';

function ShowUncontrolledModal(): JSX.Element {
  const { showModal, hideModal } = useModal();

  return (
    <Row justifyContent="space-around">
      <Button
        onClick={() => {
          showModal(Modal, {
            name: 'modal',
            children: (
              <Button onClick={() => hideModal('modal')}>Close me</Button>
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
