import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { TextFieldInput } from "./TextField.styles";
import { IconButton } from "../IconButton";
import { TextFieldProps } from "./TextField.types";
import { useTheme } from "../Theme";
import { cx } from "@peersyst/react-utils";

export default function TextField({
    type,
    showPasswordElement: showPasswordElementProp,
    hidePasswordElement: hidePasswordElementProp,
    clearElement: clearElementProp,
    clearable,
    className,
    ...textInputProps
}: TextFieldProps): JSX.Element {
    const [showPwd, setShowPwd] = useState(false);

    const {
        theme: {
            icons: { show: Show, hide: Hide, cross: Cross },
        },
    } = useTheme();
    const showPasswordElement = showPasswordElementProp || <Show />;
    const hidePasswordElement = hidePasswordElementProp || <Hide />;
    const clearElement = clearElementProp || <Cross />;

    return (
        <TextInput<HTMLInputElement> className={cx("TextField", className)} {...textInputProps}>
            {({ spellCheck, value, setValue, ...props }) => (
                <>
                    <TextFieldInput
                        {...props}
                        value={value}
                        type={showPwd ? "text" : type || "text"}
                        spellCheck={!(type === "email" || type === "password") || spellCheck}
                    />
                    {!!value && clearable && (
                        <IconButton onClick={() => setValue("")}>{clearElement}</IconButton>
                    )}
                    {type === "password" && (
                        <IconButton onClick={() => setShowPwd(!showPwd)}>
                            {showPwd ? showPasswordElement : hidePasswordElement}
                        </IconButton>
                    )}
                </>
            )}
        </TextInput>
    );
}
