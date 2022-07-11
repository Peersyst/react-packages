import { useComponentConfig } from "@peersyst/react-components-core";

export default function (): number {
    return useComponentConfig("Toolbar").height;
}
