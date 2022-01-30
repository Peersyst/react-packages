import { Reducer, useReducer } from "react";
import {
    HideModalAction,
    ModalAction,
    ModalActionType,
    ModalState,
    RemoveModalAction,
    ShowModalAction,
} from "../ModalProvider.types";

const modalIsActive = (state: ModalState, name: string) =>
    state.some((Modal) => Modal.props.name === name);

const reducer = (state: ModalState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionType.SHOW_MODAL:
            return modalIsActive(state, (action as ShowModalAction).payload.props.name as string)
                ? state
                : state.concat((action as ShowModalAction).payload);
        case ModalActionType.HIDE_MODAL:
            return state.map((Modal) => {
                if (Modal.props.name === (action as HideModalAction).payload)
                    Modal.props.open = false;
                return Modal;
            });
        case ModalActionType.REMOVE_MODAL:
            return state.filter(
                (Modal) => Modal.props.name !== (action as RemoveModalAction).payload,
            );
        default:
            return state;
    }
};

export function useModalReducer() {
    return useReducer<Reducer<ModalState, ModalAction>>(reducer, []);
}
