import { Button, ToastAnimation as Animation, useToast } from "@peersyst/react-components";

const toastAnimation = ["scale", "fade", "slide", "fadingSlide"];

const ToastAnimation = () => {
    const { showToast } = useToast();

    return (
        <>
            {toastAnimation.map((animation, i) => (
                <Button
                    key={i.toString()}
                    onClick={() => showToast("Hello", { animation: animation as Animation })}
                >
                    Show {animation} toast
                </Button>
            ))}
        </>
    );
};

export default ToastAnimation;
