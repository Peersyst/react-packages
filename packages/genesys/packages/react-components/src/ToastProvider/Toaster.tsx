import { useToasterState } from "./hooks/useToasterState";

export default function Toaster(): JSX.Element {
    const toast = useToasterState();

    return <div id="toast-root">{toast}</div>;
}
