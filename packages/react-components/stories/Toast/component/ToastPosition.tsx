import { Button, useToast } from "../../../src";
import { ToastPosition as Position } from "../../../src/Toast/Toast.types";

const toastPosition = [
    "bottom-left",
    "top-left",
    "top-center",
    "top-right",
    "bottom-right",
    "bottom-center",
];

const ToastPosition = () => {
    const { showToast } = useToast();

    return (
        <>
            {toastPosition.map((pos, index) => (
                <Button
                    key={index.toString()}
                    onClick={() => showToast("Hello from " + pos, { position: pos as Position })}
                >
                    {pos}
                </Button>
            ))}
        </>
    );
};

export default ToastPosition;
