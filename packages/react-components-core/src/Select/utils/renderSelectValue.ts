import { ReactNode } from "react";

export function renderSelectValue(value: ReactNode | ReactNode[]): ReactNode {
    if (Array.isArray(value)) return value.join(", ");
    else return value;
}
