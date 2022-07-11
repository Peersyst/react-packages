import { Config, CreateConfig, createConfigCore } from "@peersyst/react-components-core";
import defaultConfig from "./defaultConfig";

export default function (config: CreateConfig): Config {
    return createConfigCore(defaultConfig, config);
}
