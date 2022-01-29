import { useState } from 'react';
import { Row, Button, RadioButton } from '../../../src';

export default function ControlledRadioButton(): JSX.Element {
  const [checked, setChecked] = useState(false);

  return (
    <Row gap={20} justifyContent="space-between" alignItems="center">
      <RadioButton value={checked} onChange={setChecked} />
      <Button onClick={() => setChecked(!checked)}>
        {checked ? 'Uncheck it' : 'Check it'}
      </Button>
    </Row>
  );
}
