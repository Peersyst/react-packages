import useConfig from "./useConfig";
import { Config } from "../config.types";

export default function (): Config["validators"] {
    return useConfig("validators");
}
