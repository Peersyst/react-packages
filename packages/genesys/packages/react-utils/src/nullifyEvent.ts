import { SyntheticEvent } from "react";

export default function nullifyEvent(e: SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
}
