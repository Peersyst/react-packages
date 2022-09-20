import { createContext } from "react";
import { ModalWithId, ModalState } from "./ModalProvider.types";

export interface ModalContextType {
    showModal: <T>(Modal: ModalWithId<T>, props?: T) => void;
    hideModal: (modal: ModalWithId | string) => void;
    removeModal: (id: string) => void;
    overrideModal: <T>(Modal: ModalWithId<T>, props?: T) => void;
    isModalActive: (modal: ModalWithId | string) => boolean;
    modals: ModalState;
}

const defaultValue: ModalContextType = {
    showModal: () => undefined,
    hideModal: () => undefined,
    removeModal: () => undefined,
    overrideModal: () => undefined,
    isModalActive: () => false,
    modals: [],
};

export const ModalContext = createContext<ModalContextType>(defaultValue);
export const ModalConsumer = ModalContext.Consumer;
