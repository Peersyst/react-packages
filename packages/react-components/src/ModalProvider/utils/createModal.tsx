import { ComponentType } from "react";
import { CommonModalComponentProps, ModalWithId } from "../ModalProvider.types";

export default function createModal<P extends CommonModalComponentProps>(
    Component: ComponentType<P>,
): ModalWithId<P> {
    const id = new Date().getTime().toString();
    const Modal: ComponentType<P> & { id: string } = Component as ModalWithId<P>;
    Modal.id = id;
    return Modal;
}
