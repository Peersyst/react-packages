import { ComponentType, createContext } from "react";
import { CommonModalComponentProps, ModalComponentProps, ModalState } from "./ModalProvider.types";

export interface ModalContextType {
    showModal: <T extends CommonModalComponentProps = CommonModalComponentProps>(
        Modal: ComponentType<T>,
        props: ModalComponentProps<T>,
    ) => void;
    hideModal: (name: string) => void;
    removeModal: (name: string) => void;
    isModalActive: (name: string) => boolean;
    modals: ModalState;
}

const defaultValue: ModalContextType = {
    showModal: () => undefined,
    hideModal: () => undefined,
    removeModal: () => undefined,
    isModalActive: () => false,
    modals: [],
};

export const ModalContext = createContext<ModalContextType>(defaultValue);
export const ModalConsumer = ModalContext.Consumer;
