// From @mui/utils
/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useRef, useState } from "react";

export interface UseControlledProps<T = unknown> {
    /**
     * Holds the component value when it's controlled.
     */
    controlled: T | undefined;
    /**
     * The default value when uncontrolled.
     */
    default: T | undefined;
    /**
     * The component name displayed in warnings.
     */
    name: string;
    /**
     * The name of the state variable displayed in warnings.
     */
    state?: string;
}

export default function useControlledState<T = unknown>({
    controlled,
    default: defaultProp,
    name,
    state = "value",
}: UseControlledProps): [T, (newValue: T | ((prevValue: T) => T)) => void] {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = useRef(controlled !== undefined);
    const [valueState, setValue] = useState(defaultProp);
    const value = isControlled ? controlled : valueState;

    if (process.env.NODE_ENV !== "production") {
        useEffect(() => {
            if (isControlled !== (controlled !== undefined)) {
                console.error(
                    [
                        `A component is changing the ${
                            isControlled ? "" : "un"
                        }controlled ${state} state of ${name} to be ${
                            isControlled ? "un" : ""
                        }controlled.`,
                        "Elements should not switch from uncontrolled to controlled (or vice versa).",
                        `Decide between using a controlled or uncontrolled ${name} ` +
                            "element for the lifetime of the component.",
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        "More info: https://fb.me/react-controlled-components",
                    ].join("\n"),
                );
            }
        }, [state, name, controlled]);

        const { current: defaultValue } = useRef(defaultProp);

        useEffect(() => {
            if (!isControlled && defaultValue !== defaultProp) {
                console.error(
                    [
                        `A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
                            `To suppress this warning opt to use a controlled ${name}.`,
                    ].join("\n"),
                );
            }
        }, [JSON.stringify(defaultProp)]);
    }

    const setValueIfUncontrolled = useCallback((newValue) => {
        if (!isControlled) {
            setValue(newValue);
        }
    }, []);

    return [value as T, setValueIfUncontrolled];
}
