import { Button, useToast } from "@peersyst/react-components";

const Example = () => {
    const { showToast } = useToast();

    return <Button onClick={() => showToast("Hello", { type: "info" })}>Show toast</Button>;
};

export default Example;
