// TODO: Check if a headless hook can be built between rwc and rnc
import { CodeInputsProps } from "./CodeInputs.types";
import { Row } from "../../../layout/Row";
import { createRef, useRef } from "react";
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from "react-native";
import { CodeInput } from "./CodeInputs.styles";

const CodeInputs = ({
    digits,
    gap = 8,
    onBlur,
    onFocus,
    placeholder,
    value,
    setValue,
    context: { invalid, disabled, readonly, focused },
    style: { textFields: textFieldsStyle = {}, ...rootStyle },
    setFocused,
}: CodeInputsProps) => {
    const refs = useRef([...Array(digits)].map(() => createRef<TextInput>()));

    const handleChange =
        (index: number) =>
        (digit: string, force = false) => {
            if (!force && value.length === digits) return;

            const newValue = value.slice(0, digits).split("");
            newValue[index] = digit;
            setValue(newValue.join(""));

            if (force) return;

            if (digit && refs.current[index + 1]) {
                refs.current[index + 1].current?.focus();
            } else if (newValue[index] && index === digits - 1) {
                refs.current[index].current?.blur();
            }
        };

    const handleKeyPress =
        (index: number) => (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            if (e.nativeEvent.key === "Backspace") {
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
        const values = value.split("");

        while (i < digits - 1) {
            if (!values[i]) {
                break;
            }
            i++;
        }

        refs.current[i].current?.focus();
    };

    const handleBlur = () => {
        if (refs.current.every((ref) => !ref.current?.isFocused())) {
            setFocused(false);
            onBlur?.();
        }
    };

    return (
        <Row gap={gap} style={rootStyle}>
            {[...Array(digits)].map((_, i) => (
                <CodeInput
                    placeholder={placeholder?.split("")[i]}
                    value={value.split("")[i]}
                    onChange={handleChange(i)}
                    key={i.toString()}
                    keyboardType="number-pad"
                    ref={refs.current[i]}
                    onKeyPress={handleKeyPress(i)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    selectTextOnFocus
                    readonly={readonly}
                    disabled={disabled}
                    error={invalid}
                    style={{ component: textFieldsStyle }}
                />
            ))}
        </Row>
    );
};

export default CodeInputs;
