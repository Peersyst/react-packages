/* eslint-disable @typescript-eslint/no-empty-interface */
import "@peersyst/react-components-core";
import { ComponentsConfig } from "./components.config.types";
import { CreateGlobalStyles } from "./globalStyles";

declare module "@peersyst/react-components-core" {
    export interface CoreConfigTypes {
        ComponentsConfig: ComponentsConfig;
    }

    export interface CoreConfig {
        globalStyles: CreateGlobalStyles;
    }

    export interface CoreCreateConfig {
        globalStyles?: CreateGlobalStyles;
    }
}
