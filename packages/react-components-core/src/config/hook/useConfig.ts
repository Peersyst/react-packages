import { Config } from "../config.types";
import useAllConfig from "./useAllConfig";

export default function <Key extends keyof Config>(config: Key): Config[Key] {
    return useAllConfig()[config];
}
