import { useToasterState } from "@peersyst/react-components-core";
import { Toast } from "../Toast";

export default function Toaster(): JSX.Element {
    const toast = useToasterState(Toast);

    return <>{toast}</>;
}
