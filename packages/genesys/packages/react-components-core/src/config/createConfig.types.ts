/* eslint-disable @typescript-eslint/no-empty-interface */
import { Config } from "./config.types";
import { DeepPartial } from "@peersyst/react-types";

export interface BaseCoreCreateConfig {
    projectName: string;
    theme?: Config["theme"];
    themes?: Partial<Config["themes"]>;
    translate?: Config["translate"];
    locale?: Config["locale"];
    validators?: Config["validators"];
    components?: DeepPartial<Config["components"]>;
}

export interface CoreCreateConfig extends BaseCoreCreateConfig {}
export interface CreateConfig extends CoreCreateConfig {}
