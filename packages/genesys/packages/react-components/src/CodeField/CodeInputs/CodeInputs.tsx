import { CodeInputsProps } from "./CodeInputs.types";
import { createRef, useRef, KeyboardEvent } from "react";
import { CodeInput } from "./CodeInputs.styles";
import { Row } from "../../Row";
import { useNumericInput } from "@peersyst/react-components-core";

const CodeInputs = ({
    digits,
    gap = 8,
    placeholder,
    value,
    setValue,
    context: { invalid, disabled, readonly, setFocused },
    onBlur,
    onFocus,
}: CodeInputsProps) => {
    const refs = useRef([...Array(digits)].map(() => createRef<HTMLInputElement>()));

    const { parse, format } = useNumericInput();

    const handleChange =
        (index: number) =>
        (digit: string, force = false) => {
            if (!force && value.length === digits) return;

            const newValue = value.slice(0, digits).split("");
            newValue[index] = digit;
            setValue(newValue.join(""));

            if (digit && refs.current[index + 1]) {
                refs.current[index + 1].current?.focus();
            } else if (newValue[index] && index === digits - 1) {
                refs.current[index].current?.blur();
            }
        };

    const handleKeyDown = (index: number) => (e: KeyboardEvent) => {
        if (e.key === "Backspace") {
            if (refs.current[index].current?.value) {
                handleChange(index)("", true);
            } else if (index > 0) {
                handleChange(index - 1)("", true);
                refs.current[index - 1].current?.focus();
            }
        }
    };

    const handleFocus = () => {
        setFocused(true);
        onFocus?.();

        let i = 0;
        while (i < digits) {
            if (!refs.current[i].current?.value || i === digits - 1) {
                break;
            }
            i++;
        }

        refs.current[i].current?.focus();
    };

    const handleBlur = () => {
        if (refs.current.every((ref) => ref.current === document.activeElement)) {
            setFocused(false);
            onBlur?.();
        }
    };

    return (
        <Row gap={gap} className="CodeInputs">
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
        </Row>
    );
};

export default CodeInputs;
