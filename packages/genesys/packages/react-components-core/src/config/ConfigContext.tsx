import { createContext, FC, PropsWithChildren } from "react";
import { Config } from "./config.types";

export const ConfigContext = createContext<Config>({} as never);

export const ConfigProvider: FC<PropsWithChildren<{ config: Config }>> = ({ config, children }) => (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export const ConfigConsumer = ConfigContext.Consumer;
