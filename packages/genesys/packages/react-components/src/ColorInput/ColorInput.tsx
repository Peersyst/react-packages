import { ColorInputProps } from "./ColorInput.types";
import { ChangeEvent, createRef } from "react";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import {
    ColorValidator,
    useMergeDefaultProps,
    useTranslate,
} from "@peersyst/react-components-core";
import { ColorInputDisplay, ColorInputRoot, ColorInputTextField } from "./ColorInput.styles";
import { cx } from "@peersyst/react-utils";

const ColorInput = (props: ColorInputProps): JSX.Element => {
    const {
        defaultValue = "#FFFFFF",
        showTextField,
        readonly = false,
        disabled = false,
        LabelProps = {},
        Label = FormControlLabel,
        showValid,
        required,
        label,
        ...rest
    } = useMergeDefaultProps("ColorInput", props);

    const translate = useTranslate();

    const uploadRef = createRef<HTMLInputElement>();

    const active = !disabled && !readonly;

    const handleDisplayClick = () => {
        if (active) uploadRef?.current?.click();
    };

    const handleValidation = (value: string): [boolean, string] => {
        const colorValidator = new ColorValidator(undefined, translate);
        return [colorValidator.validate(value), colorValidator.message];
    };

    return (
        <FormControl<string>
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
                const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value.toUpperCase());
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
                            style={{ backgroundColor: value }}
                            disabled={disabled}
                            active={active}
                            onClick={handleDisplayClick}
                        />
                        {showTextField && (
                            <ColorInputTextField
                                value={value}
                                onChange={setValue}
                                disabled={disabled}
                                readonly={readonly}
                                hideError
                                showValid={showValid}
                                required={required}
                            />
                        )}
                        {active && (
                            <input
                                ref={uploadRef}
                                type="color"
                                value={value}
                                onChange={handleChange}
                            />
                        )}
                    </ColorInputRoot>
                );
            }}
        </FormControl>
    );
};

export default ColorInput;
