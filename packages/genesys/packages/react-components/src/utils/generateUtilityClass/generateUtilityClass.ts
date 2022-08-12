import { capitalize } from "@peersyst/react-utils";

export type GlobalStateSlot =
    | "active"
    | "checked"
    | "completed"
    | "disabled"
    | "error"
    | "expanded"
    | "focused"
    | "focusVisible"
    | "required"
    | "selected";

const globalStateClassesMapping: Record<GlobalStateSlot, string> = {
    active: "Active",
    checked: "Checked",
    completed: "Completed",
    disabled: "Disabled",
    error: "Error",
    expanded: "Expanded",
    focused: "Focused",
    focusVisible: "FocusVisible",
    required: "Required",
    selected: "Selected",
};

export default function generateUtilityClass(componentName: string, slot: string): string {
    const globalStateClass = globalStateClassesMapping[slot as GlobalStateSlot];
    return globalStateClass || `${componentName}${capitalize(slot)}`;
}
