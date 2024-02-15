import { ReactElement } from "react";
import { ModalProps as ReactNativeModalProps } from "./react-native-modal";

export interface BackdropProps {
    /**
     * Content in animation
     */
    animationIn?: ReactNativeModalProps["animationIn"] | "none";
    /**
     * Animation in timing
     */
    animationInTiming?: ReactNativeModalProps["animationInTiming"];
    /**
     * Content out animation
     */
    animationOut?: ReactNativeModalProps["animationOut"] | "none";
    /**
     * Animation out timing
     */
    animationOutTiming?: ReactNativeModalProps["animationOutTiming"];
    /**
     * Whether the backdrop should be rendered
     */
    renderBackdrop?: ReactNativeModalProps["hasBackdrop"];
    /**
     * Backdrop color
     */
    backdropColor?: ReactNativeModalProps["backdropColor"];
    /**
     * Backdrop opacity
     */
    backdropOpacity?: ReactNativeModalProps["backdropOpacity"];
    /**
     * Backdrop in timing
     */
    backdropTransitionInTiming?: ReactNativeModalProps["backdropTransitionInTiming"];
    /**
     * Backdrop out timing
     */
    backdropTransitionOutTiming?: ReactNativeModalProps["backdropTransitionOutTiming"];
    /**
     * Backdrop is open
     */
    open?: ReactNativeModalProps["isVisible"];
    /**
     * Backdrop is open on mount
     */
    defaultOpen?: boolean;
    /**
     * Backdrop is closable
     */
    closable?: boolean;
    /**
     * Close on Backdrop tap
     */
    closeOnBackdropTap?: boolean;
    /**
     * onClose handler
     */
    onClose?: ReactNativeModalProps["onModalWillHide"];
    /**
     * onExited handler
     */
    onExited?: ReactNativeModalProps["onModalHide"];
    /**
     * onOpen handler
     */
    onOpen?: ReactNativeModalProps["onModalWillShow"];
    /**
     * onEntered handler
     */
    onEntered?: ReactNativeModalProps["onModalShow"];
    /**
     * onSwipeStart handler
     */
    onSwipeStart?: ReactNativeModalProps["onSwipeStart"];
    /**
     * onSwipeMove handler
     * Called on each swipe event
     */
    onSwipeMove?: ReactNativeModalProps["onSwipeMove"];
    /**
     * onSwipeCancel handler
     */
    onSwipeCancel?: ReactNativeModalProps["onSwipeCancel"];
    /**
     * PanResponder threshold
     * The threshold for when the panResponder should pick up swipe events
     */
    panResponderThreshold?: ReactNativeModalProps["panResponderThreshold"];
    /**
     * Backdrop can be closed by swiping its content
     */
    swipeable?: boolean;
    /**
     * Swipe threshold
     * Swiping threshold that when reached closes the backdrop
     */
    swipeThreshold?: ReactNativeModalProps["swipeThreshold"];
    /**
     * Swipe direction
     */
    swipeDirection?: ReactNativeModalProps["swipeDirection"];
    /**
     * Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
     */
    propagateSwipe?: ReactNativeModalProps["propagateSwipe"];
    /**
     * Whether to avoid the keyboard
     */
    avoidKeyboard?: boolean;
    /**
     * If true, renders the backdrop in a react-native `Modal`.
     * If false, renders the backdrop with a portal in the `ModalProvider`.
     * @default false
     */
    native?: boolean;
    /**
     * Backdrop style
     */
    style?: ReactNativeModalProps["style"];
    /**
     * Backdrop content
     */
    children?:
        | ReactElement
        | ((open: boolean, setOpen: (value: boolean) => unknown) => ReactElement);
}

export type ExposedBackdropProps = Omit<BackdropProps, "children" | "style">;
