import { DialogButton, DialogProps as CoreDialogProps } from "@peersyst/react-components-core";
import { DIALOG_SIZES } from "./Dialog.constants";
import { Demand } from "@peersyst/react-types";
import { ButtonProps } from "../Button";
import { ComponentsConfig } from "../config";
import { ModalProps } from "../Modal";

export type DialogSize = typeof DIALOG_SIZES[number];

export interface DialogProps
    extends CoreDialogProps<ComponentsConfig["Dialog"]>,
        Omit<ModalProps, "onExited" | "onClose"> {
    size?: DialogSize | string;
}

export type DialogRootProps = Demand<Pick<DialogProps, "size">, "size">;

export type DialogActionProps = DialogButton & Omit<ButtonProps, "onClick" | "children" | "color">;
