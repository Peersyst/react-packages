import {
    createModal,
    DIALOG_ACTION_COLOR_MAP,
    useComponentConfig,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { DialogActions, DialogBody, DialogRoot, DialogTitle } from "./Dialog.styles";
import { DialogProps } from "./Dialog.types";
import { capitalize, cx } from "@peersyst/react-utils";

const Dialog = createModal<DialogProps>((props): JSX.Element => {
    const {
        actions: {
            component: ActionComponent,
            className: actionClassName,
            ...actionComponentProps
        },
    } = useComponentConfig("Dialog");

    const {
        title,
        content,
        buttons,
        size = "sm",
        close,
        ...modalProps
    } = useMergeDefaultProps("Dialog", props);

    return (
        <DialogRoot size={size} className={cx("Dialog", capitalize("sm"))} {...modalProps}>
            <DialogTitle className="DialogTitle">{title}</DialogTitle>
            <DialogBody className="DialogBody">{content}</DialogBody>
            <DialogActions className="DialogActions">
                {buttons?.map(({ text, type = "default", action }, key) => (
                    <ActionComponent
                        {...actionComponentProps}
                        className={cx(
                            "DialogAction",
                            capitalize(type) + "DialogAction",
                            actionClassName,
                        )}
                        onClick={action || close}
                        color={DIALOG_ACTION_COLOR_MAP[type]}
                        key={key}
                    >
                        {text}
                    </ActionComponent>
                )) || (
                    <ActionComponent
                        {...actionComponentProps}
                        className={cx("DialogAction", "DefaultDialogAction", actionClassName)}
                        onClick={close}
                    >
                        OK
                    </ActionComponent>
                )}
            </DialogActions>
        </DialogRoot>
    );
});

export default Dialog;
