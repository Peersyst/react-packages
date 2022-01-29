import { ReactNode } from "react";

export function renderValueDefault(value: ReactNode | ReactNode[]): ReactNode {
    if (Array.isArray(value)) return value.join(", ");
    else return value;
}
