import { Children, ReactElement, ReactNode, useMemo } from "react";
import { CoreSelectItemProps, SelectOption } from "../Select.types";
import isSelectOption from "../utils/isSelectOption";

export function useSelectDisplayContent<
    T,
    SIP extends CoreSelectItemProps<T> = CoreSelectItemProps<T>,
>(
    value: T | T[],
    multiple: boolean,
    options: SelectOption<T>[] | ReactElement<SIP> | ReactElement<SIP>[] | undefined,
    compare: (a: T, b: T) => boolean = (a, b) => a === b,
): ReactNode | ReactNode[] {
    return useMemo(() => {
        if (value === undefined || !options) return;

        if (Array.isArray(options) && isSelectOption(options[0])) {
            if (multiple) {
                const selectedOptions = (options as SelectOption<T>[]).filter((o) =>
                    (value as T[]).find((v) => compare(v, o.value)),
                );
                return selectedOptions.map((so) => so.label);
            } else {
                return (options as SelectOption<T>[]).find((o) => compare(value as T, o.value))
                    ?.label;
            }
        }

        if (multiple) {
            const selectedChildren = Children.toArray(options as ReactNode | ReactNode[]).filter(
                (c) => (value as T[]).find((v) => compare(v, (c as ReactElement).props?.value)),
            );
            return selectedChildren.map((c) => (c as ReactElement).props?.children);
        } else
            return (
                Children.toArray(options as ReactNode | ReactNode[]).find((c) =>
                    compare((c as ReactElement).props.value, value as T),
                ) as ReactElement
            )?.props?.children;
    }, [value, multiple, options]);
}
