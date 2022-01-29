import { ComponentType, ReactNode } from "react";

export interface ModalProviderProps {
    children?: ReactNode;
}

export type ModalState = Modal[];

export interface Modal<T extends CommonModalComponentProps = CommonModalComponentProps> {
    Modal: ComponentType<ModalComponentProps<T>>;
    props: ModalComponentProps<T>;
}

export enum ModalActionType {
    SHOW_MODAL,
    HIDE_MODAL,
    REMOVE_MODAL,
}

export interface ShowModalAction {
    type: ModalActionType.SHOW_MODAL;
    payload: Modal;
}

export interface HideModalAction {
    type: ModalActionType.SHOW_MODAL;
    payload: string;
}

export interface RemoveModalAction {
    type: ModalActionType.REMOVE_MODAL;
    payload: string;
}

export type ModalAction = {
    type: ModalActionType;
    payload: Modal | string;
};

export interface CommonModalComponentProps {
    /**
     * Component name
     */
    name?: string;
    /**
     * Component is open
     */
    open?: boolean;
    /**
     * onClose handler
     */
    onClose?: () => unknown;
    /**
     * onExited handler
     */
    onExited?: () => unknown;
}

export type ModalComponentProps<T extends CommonModalComponentProps> = Omit<T, "name"> & { name: string };
