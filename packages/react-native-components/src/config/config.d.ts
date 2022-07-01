/* eslint-disable @typescript-eslint/no-empty-interface */
import "@peersyst/react-components-core";
import { ComponentsConfig } from "./components.config.types";

declare module "@peersyst/react-components-core" {
    export interface CoreConfigTypes {
        ComponentsConfig: ComponentsConfig;
    }
}
