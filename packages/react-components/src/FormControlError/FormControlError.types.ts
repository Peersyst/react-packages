import { CoreFormControlErrorProps } from "@peersyst/react-components-core";
import { CSSProperties } from "react";

export interface FormControlErrorProps extends CoreFormControlErrorProps {
    className?: string;
    style?: CSSProperties;
}
