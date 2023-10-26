import { useState } from "react";
import { BackdropProps } from "./Backdrop.types";
import { useControlled } from "@peersyst/react-hooks";
import { useTheme } from "@peersyst/react-native-styled";
import Modal from "react-native-modal";
import { View } from "react-native";
import { Toaster, useToast } from "../ToastProvider";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Backdrop(props: BackdropProps): JSX.Element {
    const {
        closable = true,
        defaultOpen = true,
        open: propsOpen,
        onClose,
        onExited,
        onOpen,
        onEntered,
        renderBackdrop,
        closeOnBackdropTap = true,
        swipeable = true,
        swipeDirection = "down",
        swipeThreshold = 100,
        children,
        animationIn,
        animationInTiming,
        animationOut,
        animationOutTiming,
        backdropColor,
        backdropOpacity,
        backdropTransitionInTiming,
        backdropTransitionOutTiming,
        onSwipeStart,
        onSwipeMove,
        onSwipeCancel,
        panResponderThreshold,
        propagateSwipe = true,
        avoidKeyboard = false,
        style,
    } = useMergeDefaultProps("Backdrop", props);

    const [open, setOpen] = useControlled(defaultOpen, propsOpen);
    const [entered, setEntered] = useState(false);
    const { toastActive, hideToast } = useToast();
    const [toastWasActive, setToastWasActive] = useState(toastActive);

    const handleClose = () => {
        if (closable && open) {
            setOpen(false);
            onClose?.();
        }
    };

    const handleEntered = () => {
        setEntered(true);
        if (toastWasActive) {
            setToastWasActive(false);
        }
        onEntered?.();
    };

    const handleOpen = () => {
        if (toastWasActive) {
            hideToast();
        }
        onOpen?.();
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (newOpen) handleOpen();
        else handleClose();
    };

    const { palette } = useTheme();

    return (
        <Modal
            isVisible={open}
            onModalWillHide={handleClose}
            onModalHide={onExited}
            onBackdropPress={closeOnBackdropTap ? handleClose : undefined}
            onBackButtonPress={handleClose}
            swipeDirection={
                !swipeable || (toastActive && !toastWasActive) ? undefined : swipeDirection
            }
            swipeThreshold={swipeable && closable ? swipeThreshold : 9999}
            onSwipeComplete={() => swipeable && handleClose()}
            onModalWillShow={handleOpen}
            onModalShow={handleEntered}
            useNativeDriverForBackdrop
            hasBackdrop={renderBackdrop}
            backdropColor={backdropColor ?? palette.backdrop}
            backdropOpacity={backdropOpacity ?? 1}
            animationIn={animationIn === "none" ? "fadeIn" : animationIn}
            animationInTiming={animationIn === "none" ? 0.01 : animationInTiming}
            animationOut={animationOut === "none" ? "fadeOut" : animationOut}
            animationOutTiming={animationOut === "none" ? 0.01 : animationOutTiming}
            backdropTransitionInTiming={backdropTransitionInTiming}
            backdropTransitionOutTiming={backdropTransitionOutTiming}
            onSwipeStart={onSwipeStart}
            onSwipeMove={onSwipeMove}
            onSwipeCancel={onSwipeCancel}
            panResponderThreshold={panResponderThreshold}
            propagateSwipe={propagateSwipe}
            style={[{ margin: 0, justifyContent: "center", alignItems: "center" }, style]}
            onResponderStart={() => toastActive && hideToast()}
            statusBarTranslucent
            avoidKeyboard={avoidKeyboard}
        >
            {typeof children === "function" ? children(open, handleOpenChange) : children}
            {entered && !toastWasActive && toastActive && open && (
                <View
                    style={{
                        marginTop: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    <Toaster />
                </View>
            )}
        </Modal>
    );
}
