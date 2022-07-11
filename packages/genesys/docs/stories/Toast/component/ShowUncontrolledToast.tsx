import { Button, useToast } from "@peersyst/react-components";

const ShowUncontrolledToast = () => {
    const { showToast } = useToast();

    return <Button onClick={() => showToast("I'm uncontrolled!")}>Show Uncontrolled toast</Button>;
};

export default ShowUncontrolledToast;
