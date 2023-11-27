import { createModal } from "../ModalProvider";
import {
    DialogRoot,
    DialogTitle,
    DialogMessage,
    DialogHeader,
    DialogContent,
} from "./Dialog.styles";
import { Col } from "../../layout/Col";
import { Row } from "../../layout/Row";
import {
    DIALOG_ACTION_COLOR_MAP,
    DialogButtonsLayoutAlignment,
    DialogButtonsLayoutJustification,
    useComponentConfig,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { DimensionValue, FlexStyle } from "react-native";
import { DialogProps } from "./Dialog.types";
import { useDialogStyles } from "./hooks";
import { useControlled } from "@peersyst/react-hooks";

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

const Dialog = createModal<DialogProps>((rawProps): JSX.Element => {
    const {
        actions: { component: ActionComponent, ...actionComponentProps },
    } = useComponentConfig("Dialog");

    const props = useMergeDefaultProps("Dialog", rawProps);

    const {
        open: openProp,
        onClose,
        notch,
        title,
        content,
        buttons,
        gap = 14,
        buttonsLayout: {
            direction = "row",
            justifyContent = "end",
            alignItems = "center",
            gap: buttonLayoutGap = 20,
            ...restButtonsLayout
        } = {},
        animationIn = "fadeIn",
        animationOut = "fadeOut",
        style: _style,
        ...modalProps
    } = props;

    const { rootStyle, titleStyle, contentStyle, buttonsStyle } = useDialogStyles(props);

    const ButtonsLayoutComponent = direction === "row" ? Row : Col;

    const [open, setOpen] = useControlled(true, openProp, openProp ? onClose : undefined);

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <DialogRoot
            open={open}
            onClose={closeDialog}
            animationIn={animationIn}
            animationOut={animationOut}
            style={rootStyle}
            {...modalProps}
        >
            <Col gap={gap}>
                {notch}
                {!!title && (
                    <DialogHeader style={titleStyle.rootStyle}>
                        {typeof title === "string" ? (
                            <DialogTitle style={titleStyle.textStyle}>{title}</DialogTitle>
                        ) : (
                            title
                        )}
                    </DialogHeader>
                )}
                {!!content && (
                    <DialogContent style={contentStyle.rootStyle}>
                        {typeof content === "string" ? (
                            <DialogMessage style={contentStyle.textStyle}>{content}</DialogMessage>
                        ) : (
                            content
                        )}
                    </DialogContent>
                )}
                <ButtonsLayoutComponent
                    justifyContent={DIALOG_BUTTONS_JUSTIFY_MAP[justifyContent]}
                    alignItems={DIALOG_BUTTONS_ALIGN_MAP[alignItems]}
                    gap={buttonLayoutGap as DimensionValue}
                    style={buttonsStyle}
                    {...restButtonsLayout}
                >
                    {buttons?.map(({ text, type = "default", action, ...buttonProps }, key) => (
                        <ActionComponent
                            {...actionComponentProps}
                            {...buttonProps}
                            onPress={action || closeDialog}
                            color={DIALOG_ACTION_COLOR_MAP[type]}
                            key={key}
                        >
                            {text}
                        </ActionComponent>
                    )) || (
                        <ActionComponent {...actionComponentProps} onPress={closeDialog}>
                            OK
                        </ActionComponent>
                    )}
                </ButtonsLayoutComponent>
            </Col>
        </DialogRoot>
    );
});

export default Dialog;
