export * from "./components.config.types";
export { default as createConfig } from "./createConfig";
export { default as defaultConfig } from "./defaultConfig";
export { default as ConfigProvider } from "./ConfigProvider";
export {
    useComponentConfig,
    useAllConfig,
    useConfig,
    useDefaultProps,
    useMergeDefaultProps,
    useThemes,
    useTranslate,
    useValidators,
} from "@peersyst/react-components-core";
export type {
    ExtraValidators,
    TranslateFn,
    ComponentConfig,
    ComponentsConfig,
    Themes,
    Config,
    CoreConfigTypes,
    CreateConfig,
    ConfigContext,
    ConfigConsumer,
} from "@peersyst/react-components-core";
