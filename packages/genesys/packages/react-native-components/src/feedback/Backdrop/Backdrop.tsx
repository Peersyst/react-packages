import { BackdropProps } from "./Backdrop.types";
import { useControlled } from "@peersyst/react-hooks";
import { Platform } from "react-native";
import { useMergeDefaultProps, useTheme } from "@peersyst/react-components-core";
import useBackdropDeviceHeight from "./hooks/useBackdropDeviceHeight";
import { MODAL_PORTAL_HOST } from "../ModalProvider";
import { Fragment } from "react";
import { Portal } from "../../util/Portal";
import { ThemeOverrideProvider } from "../../theme";
import { ReactNativeModal } from "./react-native-modal";

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
        avoidKeyboard: avoidKeyboardProp = false,
        native = false,
        style,
    } = useMergeDefaultProps("Backdrop", props);

    const [open, setOpen] = useControlled(defaultOpen, propsOpen);
    const deviceHeight = useBackdropDeviceHeight();

    const handleClose = () => {
        if (closable && open) {
            setOpen(false);
            onClose?.();
        }
    };

    const handleEntered = () => {
        onEntered?.();
    };

    const handleOpen = () => {
        onOpen?.();
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (newOpen) handleOpen();
        else handleClose();
    };

    const avoidKeyboard = avoidKeyboardProp && Platform.OS === "ios";

    const theme = useTheme();

    const [Root, rootProps] = native ? [Fragment, {}] : [Portal, { hostName: MODAL_PORTAL_HOST }];

    return (
        <Root {...rootProps}>
            {/* Portal theme as well (if theme is not portalled, local theme overrides would be ignored) */}
            <ThemeOverrideProvider theme={theme}>
                <ReactNativeModal
                    isVisible={open}
                    onModalWillHide={handleClose}
                    onModalHide={onExited}
                    onBackdropPress={closeOnBackdropTap ? handleClose : undefined}
                    onBackButtonPress={handleClose}
                    swipeDirection={swipeable ? swipeDirection : undefined}
                    swipeThreshold={swipeable && closable ? swipeThreshold : 9999}
                    onSwipeComplete={() => swipeable && handleClose()}
                    onModalWillShow={handleOpen}
                    onModalShow={handleEntered}
                    useNativeDriverForBackdrop
                    hasBackdrop={renderBackdrop}
                    backdropColor={backdropColor ?? theme.palette.backdrop}
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
                            zIndex: theme.zIndex.modal,
                        },
                        style,
                    ]}
                    avoidKeyboard={avoidKeyboard}
                    deviceHeight={deviceHeight}
                    coverScreen={native}
                >
                    {typeof children === "function" ? children(open, handleOpenChange) : children}
                </ReactNativeModal>
            </ThemeOverrideProvider>
        </Root>
    );
}
