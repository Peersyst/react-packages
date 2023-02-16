import { useCallback } from "react";
import { ModalProps } from "./Modal.types";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop } from "../Backdrop";
import { CloseButton, ModalRoot } from "./Modal.styles";
import { useTheme } from "@peersyst/react-native-styled";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

export default function Modal(props: ModalProps): JSX.Element {
    const {
        closable = true,
        showCloseButton = false,
        defaultOpen = true,
        open: propOpen,
        children,
        onClose,
        elevation = 16,
        style: styleProp = {},
        ...rest
    } = useMergeDefaultProps("Modal", props);

    const globalStyle = useGlobalStyles("Modal");
    const style = { ...globalStyle, ...styleProp };

    const [open, setOpen] = useControlled(defaultOpen, propOpen);
    const {
        icons: { cross: CrossIcon },
    } = useTheme();

    const handleClose = useCallback(() => {
        if (closable && open) {
            setOpen(false);
            onClose?.();
        }
    }, [closable, open, setOpen]);

    return (
        <Backdrop
            defaultOpen={defaultOpen}
            open={open}
            onClose={handleClose}
            closable={closable}
            {...rest}
        >
            <ModalRoot style={style} elevation={elevation}>
                {children}
                {closable && showCloseButton && (
                    <CloseButton onPress={handleClose}>
                        <CrossIcon />
                    </CloseButton>
                )}
            </ModalRoot>
        </Backdrop>
    );
}
