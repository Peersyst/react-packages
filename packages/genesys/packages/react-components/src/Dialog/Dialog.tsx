import {
    createModal,
    DIALOG_ACTION_COLOR_MAP,
    DialogButtonsLayoutAlignment,
    DialogButtonsLayoutJustification,
    useComponentConfig,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { DialogActions, DialogBody, DialogRoot, DialogTitle } from "./Dialog.styles";
import { DialogProps } from "./Dialog.types";
import { capitalize, cx } from "@peersyst/react-utils";
import { Property } from "csstype";
import { Row } from "../Row";
import { Col } from "../Col";

const DIALOG_BUTTONS_JUSTIFY_MAP: Record<
    DialogButtonsLayoutJustification,
    Property.JustifyContent
> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    "space-between": "space-between",
    "space-evenly": "space-evenly",
    "space-around": "space-around",
};
const DIALOG_BUTTONS_ALIGN_MAP: Record<DialogButtonsLayoutAlignment, Property.AlignItems> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
    baseline: "baseline",
};

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
        buttonsLayout: {
            direction = "row",
            justifyContent = "end",
            alignItems = "center",
            gap = "0.5rem",
            ...restButtonsLayout
        } = {},
        ...modalProps
    } = useMergeDefaultProps("Dialog", props);

    const ButtonsLayoutComponent = direction === "row" ? Row : Col;

    return (
        <DialogRoot size={size} className={cx("Dialog", capitalize("sm"))} {...modalProps}>
            {title && <DialogTitle className="DialogTitle">{title}</DialogTitle>}
            <DialogBody className="DialogBody">{content}</DialogBody>
            <DialogActions
                as={ButtonsLayoutComponent}
                className="DialogActions"
                justifyContent={DIALOG_BUTTONS_JUSTIFY_MAP[justifyContent]}
                alignItems={DIALOG_BUTTONS_ALIGN_MAP[alignItems]}
                gap={gap}
                {...restButtonsLayout}
            >
                {buttons?.map(({ text, type = "default", action, ...buttonProps }, key) => (
                    <ActionComponent
                        {...actionComponentProps}
                        {...buttonProps}
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
