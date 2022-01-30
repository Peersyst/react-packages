import { Button, useToast } from "../../../src";
import { ToastType as Type } from "../../../src/Toast/Toast.types";

const toastType = [undefined, "info", "success", "warning", "error", "loading"];

const ToastType = () => {
    const { showToast, hideToast } = useToast();

    return (
        <>
            {toastType.map((type, index) => (
                <Button
                    key={index.toString()}
                    onClick={() => {
                        showToast(
                            "I'm a" +
                                (type === "info" || type === "error" ? "n " : " ") +
                                (type || "normal") +
                                " toast",
                            {
                                type: type as Type,
                                action: type === "loading" && (
                                    <p onClick={() => hideToast()} style={{ cursor: "pointer" }}>
                                        Hide
                                    </p>
                                ),
                            },
                        );
                    }}
                >
                    {type || "normal"}
                </Button>
            ))}
        </>
    );
};

export default ToastType;
