import { ComponentType } from "react";
import { useModal } from "../hooks";
import { CommonModalComponentProps, ModalWithId } from "../ModalProvider.types";

export default function createModal<P extends CommonModalComponentProps>(
    Component: ComponentType<P & { id: string; closeModal: () => void }>,
): ModalWithId<P> {
    const id = new Date().getTime().toString();
    const HigherOrderModal = (props: P): JSX.Element => {
        const { hideModal } = useModal();
        const closeModal = () => hideModal(id);

        // @ts-ignore
        return <Component id={id} closeModal={closeModal} {...props} />;
    };
    const Modal: ComponentType<P> & { id: string } = HigherOrderModal as ModalWithId<P>;
    Modal.id = id;
    return Modal;
}
