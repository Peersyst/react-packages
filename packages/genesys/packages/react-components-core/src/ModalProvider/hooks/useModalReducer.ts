import { Reducer, useReducer } from "react";
import {
    HideModalAction,
    ModalAction,
    ModalActionType,
    ModalState,
    ModalWithId,
    OverrideModalAction,
    RemoveModalAction,
    ShowModalAction,
} from "../ModalProvider.types";

const modalIsActive = (state: ModalState, modal: string | ModalWithId) =>
    state.some(({ Modal }) =>
        typeof modal === "string" ? Modal.id === modal : Modal.id === modal.id,
    );

const reducer = (state: ModalState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionType.SHOW_MODAL:
            return modalIsActive(state, (action as ShowModalAction).payload.Modal.id as string)
                ? state
                : state.concat((action as ShowModalAction).payload);
        case ModalActionType.HIDE_MODAL:
            const payload = (action as HideModalAction).payload;
            if (!payload) return state.slice(0, -1);
            const id = typeof payload === "string" ? payload : payload.id;
            return state.map((modalState) => {
                if (modalState.Modal.id === id) modalState.props.open = false;
                return modalState;
            });
        case ModalActionType.REMOVE_MODAL:
            return state.filter(({ Modal }) => Modal.id !== (action as RemoveModalAction).payload);
        case ModalActionType.OVERRIDE_MODAL:
            return [(action as OverrideModalAction).payload];
        default:
            return state;
    }
};

export function useModalReducer() {
    return useReducer<Reducer<ModalState, ModalAction>>(reducer, []);
}
