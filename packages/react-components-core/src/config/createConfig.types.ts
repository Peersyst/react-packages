/* eslint-disable @typescript-eslint/no-empty-interface */
import { Config } from "./config.types";
import { RecursivePartial } from "@peersyst/react-types";

export interface BaseCoreCreateConfig {
    projectName: string;
    themes?: Partial<Config["themes"]>;
    translate?: Config["translate"];
    validators?: Config["validators"];
    components?: RecursivePartial<Config["components"]>;
}

export interface CoreCreateConfig extends BaseCoreCreateConfig {}
export interface CreateConfig extends CoreCreateConfig {}
