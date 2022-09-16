import { useCallback, useEffect, useState } from "react";
import { useControlled } from "@peersyst/react-hooks";
import { useTheme } from "@peersyst/react-native-styled";
import Modal from "@peersyst/react-native-modal";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { BackdropProps } from "@peersyst/react-native-components";
// Import createPortal from RN depths
// @ts-ignore
import { createPortal } from "react-native/Libraries/Renderer/shims/ReactNative";
import { useModalsNodeContext } from "../ModalProvider/ModalsNode";

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
        style,
    } = useMergeDefaultProps("Backdrop", props);

    const [open, setOpen] = useControlled(defaultOpen, propsOpen, propsOpen ? onClose : undefined);

    const handleClose = useCallback(() => {
        if (closable && open) {
            setOpen(false);
        }
    }, [closable, open, setOpen]);

    const { palette } = useTheme();

    const { modalsNodeRef, setCount, count } = useModalsNodeContext();

    // Keep consistent layout in ModalNodes
    const [modalZ, setModalZ] = useState<number>();

    useEffect(() => {
        if (open && modalZ === undefined) {
            const z = count + 1;
            setCount(z);
            setModalZ(z);
        }
    }, [open, modalZ, count]);

    return createPortal(
        <Modal
            coverScreen={false}
            zIndex={modalZ}
            isVisible={open}
            onModalWillHide={handleClose}
            onModalHide={onExited}
            onBackdropPress={closeOnBackdropTap ? handleClose : undefined}
            onBackButtonPress={handleClose}
            swipeDirection={swipeDirection}
            swipeThreshold={swipeable && closable ? swipeThreshold : 9999}
            onSwipeComplete={() => swipeable && handleClose()}
            onModalWillShow={onOpen}
            onModalShow={onEntered}
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
            style={[
                {
                    margin: 0,
                    justifyContent: "center",
                    alignItems: "center",
                },
                style,
            ]}
            statusBarTranslucent
        >
            {typeof children === "function" ? children(open, setOpen) : children}
        </Modal>,
        modalsNodeRef.current,
    );
}
