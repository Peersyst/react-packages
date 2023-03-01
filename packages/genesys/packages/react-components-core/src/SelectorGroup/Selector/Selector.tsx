import { SelectorProps } from "./Selector.types";
import { useSelector } from "./hooks/useSelector";

function Selector<T>({ value, children }: SelectorProps<T>): JSX.Element {
    const context = useSelector({ value });

    return <>{children(context)}</>;
}

export default Selector;
