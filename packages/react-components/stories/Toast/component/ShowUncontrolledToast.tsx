import { Button, useToast } from '../../../src';

const ShowUncontrolledToast = () => {
  const { showToast } = useToast();

  return (
    <Button onClick={() => showToast("I'm uncontrolled!")}>
      Show Uncontrolled toast
    </Button>
  );
};

export default ShowUncontrolledToast;
