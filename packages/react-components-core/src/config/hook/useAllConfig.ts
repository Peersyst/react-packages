import { Config } from "../config.types";
import { useContext } from "react";
import { ConfigContext } from "../ConfigContext";

export default function (): Config {
    return useContext(ConfigContext);
}
