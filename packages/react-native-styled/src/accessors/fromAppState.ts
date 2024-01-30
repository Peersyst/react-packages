import createAccessor from "./createAccessor";
import { Accessor } from "./accessors.types";
import { AppStateStatus } from "react-native";

export type FromAppStateAccessor<R> = Accessor<R>;

export type FromAppState = <R>(fn: (appStatus: AppStateStatus) => R) => FromAppStateAccessor<R>;

export default function fromAppState<R>(
    fn: (appStatus: AppStateStatus) => R,
): FromAppStateAccessor<R> {
    return createAccessor(function fromAppState(params): R {
        return fn(params.appState);
    });
}
