import { Config } from "../config.types";
import useConfig from "./useConfig";

export default function (): Config["themes"] {
    return useConfig("themes");
}
