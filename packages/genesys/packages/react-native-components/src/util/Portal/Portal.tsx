import { useContext } from "react";
import { Platform, RootTagContext } from "react-native";
import { Portal as GorhomPortal } from "@gorhom/portal";
import { ReactNode, ReactPortal } from "react";

const isFabric = (global as any)?.nativeFabricUIManager;
let createPortal: (
    children: ReactNode,
    container: Element | DocumentFragment | number | string,
    key?: null | string,
) => ReactPortal;

if (isFabric) {
    createPortal = require("react-native/Libraries/Renderer/shims/ReactFabric").createPortal;
} else {
    createPortal = require("react-native/Libraries/Renderer/shims/ReactNative").createPortal;
}

/**
 * Renders the content through a portal.
 * If `hostName` is not provided, it will use the `PortalProvider`.
 * Otherwise, it will use the `PortalHost` with the corresponding `name`.
 * Keep in mind that portaling content detaches all contexts from it.
 * If a context has to be accessed, make sure it is portalled as well.
 */
export const Portal = GorhomPortal;
