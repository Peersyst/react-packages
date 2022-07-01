import { ComponentsConfig } from "../config.types";
import useDefaultProps from "./useDefaultProps";

export default function <K extends keyof ComponentsConfig, P>(component: K, props: P): P {
    const defaultProps = useDefaultProps<K>(component);
    return { ...defaultProps, ...props } as any;
}
