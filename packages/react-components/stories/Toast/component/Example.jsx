import { Button, useToast } from '../../../src';

const Example = () => {
  const { showToast } = useToast();

  return (
    <Button onClick={() => showToast('Hello', { type: 'info' })}>
      Show toast
    </Button>
  );
};

export default Example;
