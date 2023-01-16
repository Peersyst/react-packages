import {
    createModal,
    DIALOG_ACTION_COLOR_MAP,
    useComponentConfig,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { DialogActions, DialogBody, DialogRoot, DialogTitle } from "./Dialog.styles";
import { DialogProps } from "./Dialog.types";
import { Button } from "../Button";

const Dialog = createModal<DialogProps>((props): JSX.Element => {
    const { actions: actionsConfig } = useComponentConfig("Dialog");

    const {
        title,
        message,
        buttons,
        size = "sm",
        close,
        ...modalProps
    } = useMergeDefaultProps("Dialog", props);

    return (
        <DialogRoot size={size} {...modalProps}>
            <DialogTitle>{title}</DialogTitle>
            <DialogBody>{message}</DialogBody>
            <DialogActions>
                {buttons?.map(({ text, type = "default", action }, key) => (
                    <Button
                        variant={actionsConfig.variant}
                        onClick={action || close}
                        color={DIALOG_ACTION_COLOR_MAP[type]}
                        key={key}
                    >
                        {text}
                    </Button>
                )) || (
                    <Button variant={actionsConfig.variant} onClick={close}>
                        OK
                    </Button>
                )}
            </DialogActions>
        </DialogRoot>
    );
});

export default Dialog;
