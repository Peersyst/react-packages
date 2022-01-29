import { useState } from 'react';
import { Button, Row, Backdrop } from '../../../src';

function ShowControlledBackdrop(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Row justifyContent="center">
      <Button onClick={() => setOpen(true)}>Show Controlled Backdrop</Button>
      <Backdrop open={open} onClose={() => setOpen(false)} />
    </Row>
  );
}

export default ShowControlledBackdrop;
