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
    context: { invalid, disabled, readonly },
    style: { textFields: textFieldsStyle = {}, ...rootStyle },
    setFocused,
}: CodeInputsProps) => {
    console.log(textFieldsStyle);

    const refs = useRef([...Array(digits)].map(() => createRef<TextInput>()));

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

    const handleKeyPress =
        (index: number) => (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            const values = value.split("");

            if (e.nativeEvent.key === "Backspace") {
                if (values[index]) {
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
        const values = value.split("");

        while (i < digits) {
            if (!values[i] || i === digits - 1) {
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
                    ref={refs.current[i] as any}
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
