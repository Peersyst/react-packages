// TODO: Check if a headless hook can be built between rwc and rnc
import { CodeInputsProps } from "./CodeInputs.types";
import { createRef, useRef, KeyboardEvent, useState, useEffect } from "react";
import { CodeInput, CodeInputsRoot } from "./CodeInputs.styles";
import { useNumericInput } from "@peersyst/react-components-core";

const CodeInputs = ({
    digits,
    gap = 8,
    placeholder,
    value,
    setValue,
    context: { invalid, disabled, readonly, focused, setFocused },
    onBlur,
    onFocus,
}: CodeInputsProps) => {
    const [focusIndex, setFocusIndex] = useState<number | undefined>(undefined);

    const refs = useRef([...Array(digits)].map(() => createRef<HTMLInputElement>()));

    const { parse, format } = useNumericInput();

    const handleChange =
        (index: number) =>
        (digit: string, force = false) => {
            if (!force && value.length === digits) return;

            const newValue = value.slice(0, digits).split("");
            newValue[index] = digit;
            setValue(newValue.join(""));

            if (force) {
                // Force value on ref as only updating state won't be reflected in handlers
                refs.current[index].current!.value = digit;
                return;
            }

            if (digit && refs.current[index + 1]) {
                refs.current[index + 1].current?.focus();
            } else if (newValue[index] && index === digits - 1) {
                refs.current[index].current?.blur();
            }
        };

    const handleKeyDown = (index: number) => (e: KeyboardEvent) => {
        if (e.key === "Backspace") {
            const values = value.split("");
            if (values[index]) {
                handleChange(index)("", true);
            } else if (index > 0) {
                handleChange(index - 1)("", true);
                refs.current[index - 1].current?.focus();
            }
        }
    };

    const handleFocus = () => {
        if (!focused) {
            setFocused(true);
            onFocus?.();
        }

        let i = 0;

        while (i < digits - 1) {
            if (!refs.current[i].current?.value) {
                break;
            }
            i++;
        }

        if (i !== focusIndex) setFocusIndex(i);
    };

    useEffect(() => {
        if (focusIndex !== undefined) {
            refs.current[focusIndex].current?.focus();
            setFocusIndex(undefined);
        }
    }, [focusIndex]);

    const handleBlur = () => {
        // Wait for next focus to be set
        setTimeout(() => {
            if (refs.current.every((ref) => ref.current !== document.activeElement)) {
                setFocused(false);
                onBlur?.();
            }
        }, 10);
    };

    return (
        <CodeInputsRoot gap={gap} className="CodeInputs">
            {[...Array(digits)].map((_, i) => (
                <CodeInput
                    placeholder={placeholder?.split("")[i]}
                    value={value.split("")[i]}
                    onChange={handleChange(i)}
                    key={i.toString()}
                    type="tel"
                    ref={refs.current[i]}
                    onKeyDown={handleKeyDown(i)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    selectOnFocus
                    readonly={readonly}
                    disabled={disabled}
                    error={invalid}
                    className="CodeInput"
                    parse={parse}
                    format={format}
                />
            ))}
        </CodeInputsRoot>
    );
};

export default CodeInputs;
