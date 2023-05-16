import { TextInputProps, TextInputStyle } from "./TextInput.types";
import { Input, InvalidIcon, TextInputRoot, ValidIcon } from "./TextInput.styles";
import {
    NativeSyntheticEvent,
    TextInputFocusEventData,
    TextStyle,
    TextInput as RNTextInput,
} from "react-native";
import { forwardRef, useRef, useState } from "react";
import { useTheme } from "@peersyst/react-native-styled";
import { Icon } from "../../display/Icon";
import { IconButton } from "../IconButton";
import { FormControlLabel, FormControlLabelStyle } from "../FormControlLabel";
import { FormControl } from "../FormControl";
import { useMergeDefaultProps, useTextInputValidation } from "@peersyst/react-components-core";
import { useTextInputStyles } from "./hooks";
import { useForkRef } from "@peersyst/react-hooks";

const TextInput = forwardRef(function TextInput(rawProps: TextInputProps, ref): JSX.Element {
    const props = useMergeDefaultProps("TextInput", rawProps);

    const inputRef = useRef<RNTextInput>(null);
    const handleRef = useForkRef(ref, inputRef);

    const {
        name,
        defaultValue = "",
        value: valueProp,
        onChange,
        validators,
        customValidators,
        disabled = false,
        readonly = false,
        required,
        prefix,
        suffix,
        errorElement: errorElementProp,
        validElement: validElementProp,
        showTextElement: showTextElementProp,
        hideTextElement: hideTextElementProp,
        clearable = false,
        clearElement: clearElementProp,
        onFocus,
        onBlur,
        secureTextEntry = false,
        hideError,
        showValid,
        label,
        hint,
        LabelProps = {},
        Label = FormControlLabel,
        error,
        format = (x: string) => x,
        parse = (x: string) => x,
        onValidated,
        style: _style,
        ...rest
    } = props;

    const [showText, setShowText] = useState(secureTextEntry);
    const validation = useTextInputValidation(validators, customValidators);
    const editable = !disabled && !readonly;

    const {
        icons: { invalid: Invalid, valid: Valid, show: Show, hide: Hide, cross: Cross },
    } = useTheme();
    const errorElement = errorElementProp === true ? <Invalid /> : errorElementProp;
    const validElement = validElementProp === true ? <Valid /> : validElementProp;
    const showTextElement = showTextElementProp || <Show />;
    const hideTextElement = hideTextElementProp || <Hide />;
    const clearElement = clearElementProp || <Cross />;

    const style = useTextInputStyles(props);

    return (
        <FormControl<string, FormControlLabelStyle, TextInputStyle>
            name={name}
            label={label}
            Label={[Label, LabelProps]}
            hint={hint}
            defaultValue={defaultValue}
            value={valueProp}
            onChange={onChange}
            disabled={disabled}
            readonly={readonly}
            required={required}
            validation={validation}
            hideError={hideError}
            showValid={showValid}
            style={style}
            error={error}
            onValidated={onValidated}
        >
            {(value, setValue, { invalid, valid }, style, setFocused) => {
                const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                    if (editable) {
                        setFocused(true);
                        onFocus?.(e);
                    }
                };
                const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                    if (editable) {
                        setFocused(false);
                        onBlur?.(e);
                    }
                };
                const handleChange = (newValue: string) => {
                    setValue(parse(newValue, value));
                };

                const {
                    input: {
                        placeholderColor = undefined,
                        highlightColor = undefined,
                        ...inputStyle
                    } = {},
                    ...rootStyle
                } = style;

                const iconStyle: TextStyle = {
                    ...inputStyle,
                    lineHeight: undefined,
                    height: undefined,
                };

                return (
                    <TextInputRoot onPress={() => inputRef.current?.focus()} style={rootStyle}>
                        {prefix && <Icon style={iconStyle}>{prefix}</Icon>}
                        <Input
                            placeholderTextColor={placeholderColor}
                            selectionColor={highlightColor}
                            style={inputStyle}
                            value={format(value)}
                            onChangeText={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            editable={editable}
                            secureTextEntry={showText}
                            ref={handleRef}
                            {...rest}
                        />
                        {clearable && !!value && editable && (
                            <IconButton style={iconStyle} onPress={() => setValue("")}>
                                {clearElement}
                            </IconButton>
                        )}
                        {secureTextEntry && (
                            <IconButton style={iconStyle} onPress={() => setShowText(!showText)}>
                                {showText ? showTextElement : hideTextElement}
                            </IconButton>
                        )}
                        {suffix && <Icon style={iconStyle}>{suffix}</Icon>}
                        {invalid && errorElement && (
                            <InvalidIcon style={{ fontSize: iconStyle.fontSize }}>
                                {errorElement}
                            </InvalidIcon>
                        )}
                        {valid && validElement && (
                            <ValidIcon style={{ fontSize: iconStyle.fontSize }}>
                                {validElement}
                            </ValidIcon>
                        )}
                    </TextInputRoot>
                );
            }}
        </FormControl>
    );
});

export default TextInput;
