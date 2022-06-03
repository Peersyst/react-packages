import { ComponentType } from "react";
import { CommonModalComponentProps, ModalWithId } from "../ModalProvider.types";
import { useModal } from "../hooks";

export default function createModal<P extends CommonModalComponentProps>(
    Component: ComponentType<P & { id: string; close: () => void }>,
): ModalWithId<P> {
    const id = new Date().getTime().toString();
    const HigherOrderModal = (props: P): JSX.Element => {
        const { hideModal } = useModal();
        const close = () => hideModal(id);

        // @ts-ignore
        return <Component id={id} close={close} {...props} />;
    };
    const Modal: ComponentType<P> & { id: string } = HigherOrderModal as ModalWithId<P>;
    Modal.id = id;
    return Modal;
}
