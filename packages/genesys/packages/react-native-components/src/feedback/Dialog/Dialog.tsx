import { createModal } from "../ModalProvider";
import { DialogRoot, DialogTitle, DialogMessage } from "./Dialog.styles";
import { Col } from "../../layout/Col";
import { Row } from "../../layout/Row";
import { useState } from "react";
import {
    DIALOG_ACTION_COLOR_MAP,
    DialogButtonsLayoutAlignment,
    DialogButtonsLayoutJustification,
    DialogProps,
    useComponentConfig,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { FlexStyle } from "react-native";

const DIALOG_BUTTONS_JUSTIFY_MAP: Record<
    DialogButtonsLayoutJustification,
    FlexStyle["justifyContent"]
> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    "space-between": "space-between",
    "space-evenly": "space-evenly",
    "space-around": "space-around",
};
const DIALOG_BUTTONS_ALIGN_MAP: Record<DialogButtonsLayoutAlignment, FlexStyle["alignItems"]> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
    baseline: "baseline",
};

const Dialog = createModal((props: DialogProps): JSX.Element => {
    const {
        actions: { component: ActionComponent, ...actionComponentProps },
    } = useComponentConfig("Dialog");

    const {
        title,
        content,
        buttons,
        buttonsLayout: {
            direction = "row",
            justifyContent = "end",
            alignItems = "center",
            gap = 20,
            ...restButtonsLayout
        } = {},
        ...modalProps
    } = useMergeDefaultProps("Dialog", props);

    const ButtonsLayoutComponent = direction === "row" ? Row : Col;

    const [open, setOpen] = useState(true);

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <DialogRoot
            open={open}
            onClose={closeDialog}
            animationIn="fadeIn"
            animationOut="fadeOut"
            {...modalProps}
        >
            <Col gap={14}>
                {title && <DialogTitle>{title}</DialogTitle>}
                {typeof content === "string" ? <DialogMessage>{content}</DialogMessage> : content}
                <ButtonsLayoutComponent
                    justifyContent={DIALOG_BUTTONS_JUSTIFY_MAP[justifyContent]}
                    alignItems={DIALOG_BUTTONS_ALIGN_MAP[alignItems]}
                    gap={gap}
                    {...restButtonsLayout}
                >
                    {buttons?.map(({ text, type = "default", action }, key) => (
                        <ActionComponent
                            {...actionComponentProps}
                            onPress={action || closeDialog}
                            color={DIALOG_ACTION_COLOR_MAP[type]}
                            key={key}
                        >
                            {text}
                        </ActionComponent>
                    )) || (
                        <ActionComponent {...actionComponentProps} onPress={close}>
                            OK
                        </ActionComponent>
                    )}
                </ButtonsLayoutComponent>
            </Col>
        </DialogRoot>
    );
});

export default Dialog;
