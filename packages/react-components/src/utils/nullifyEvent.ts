import { SyntheticEvent } from "react";

export function nullifyEvent(e: SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
}
