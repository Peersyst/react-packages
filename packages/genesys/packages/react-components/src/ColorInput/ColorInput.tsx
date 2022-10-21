import { ColorInputProps } from "./ColorInput.types";
import { ChangeEvent, createRef, useState } from "react";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import {
    ColorValidator,
    useMergeDefaultProps,
    useTranslate,
} from "@peersyst/react-components-core";
import { ColorInputDisplay, ColorInputRoot } from "./ColorInput.styles";
import { cx } from "@peersyst/react-utils";
import { TextField, TextFieldProps } from "../TextField";
import Color from "color";

function ColorInput<TFP extends TextFieldProps = TextFieldProps>(
    props: ColorInputProps<TFP>,
): JSX.Element {
    const {
        colorType,
        defaultValue = new Color("#FFFFFF"),
        showTextField,
        readonly = false,
        disabled = false,
        LabelProps = {},
        Label = FormControlLabel,
        showValid,
        required,
        label,
        TextFieldProps: { style: textFieldStyle = {}, ...restTextFieldProps } = {},
        TextField: TextFieldComponent = TextField,
        ...rest
    } = useMergeDefaultProps("ColorInput", props);

    const translate = useTranslate();

    const [textFieldValue, setTextFieldValue] = useState(defaultValue.hex());
    const uploadRef = createRef<HTMLInputElement>();

    const active = !disabled && !readonly;

    const handleDisplayClick = () => {
        if (active) uploadRef?.current?.click();
    };

    const handleValidation = (): [boolean, string] => {
        const colorValidator = new ColorValidator(colorType || true, undefined, translate);
        return [colorValidator.validate(textFieldValue), colorValidator.message];
    };

    return (
        <FormControl<Color>
            defaultValue={defaultValue}
            Label={[Label, LabelProps]}
            readonly={readonly}
            disabled={disabled}
            showValid={showValid}
            required={required}
            validation={handleValidation}
            label={label}
            {...rest}
        >
            {(value, setValue, { focused, invalid, valid }) => {
                const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
                    const color = new Color(event.target.value);
                    setValue(color);
                    setTextFieldValue(color.hex().toUpperCase());
                };

                const handleTextFieldChange = (text: string) => {
                    setTextFieldValue(text);
                    const color = new Color(text);
                    setValue(color);
                };

                return (
                    <ColorInputRoot hasLabel={!!label} className="ColorInputRoot">
                        <ColorInputDisplay
                            className={cx(
                                "ColorInputDisplay",
                                focused && "Focused",
                                invalid && "Invalid",
                                valid && "Valid",
                                disabled && "Disabled",
                                readonly && "Readonly",
                            )}
                            style={{ backgroundColor: value.hex() }}
                            disabled={disabled}
                            active={active}
                            onClick={handleDisplayClick}
                        />
                        {showTextField && (
                            // @ts-ignore
                            <TextFieldComponent
                                value={textFieldValue}
                                onChange={handleTextFieldChange}
                                disabled={disabled}
                                readonly={readonly}
                                hideError
                                showValid={showValid}
                                required={required}
                                style={{ flex: 1, ...textFieldStyle }}
                                error={invalid}
                                {...restTextFieldProps}
                            />
                        )}
                        {active && (
                            <input
                                ref={uploadRef}
                                type="color"
                                value={value.hex()}
                                onChange={handleColorChange}
                            />
                        )}
                    </ColorInputRoot>
                );
            }}
        </FormControl>
    );
}

export default ColorInput;
