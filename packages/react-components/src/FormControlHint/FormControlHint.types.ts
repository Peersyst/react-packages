import { CoreFormControlHintProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

export interface FormControlHintProps extends CoreFormControlHintProps {
    className?: string;
    style?: CSSProperties;
}
