import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { TextFieldInput } from "./TextField.styles";
import { IconButton } from "../IconButton";
import { TextFieldProps } from "./TextField.types";
import { useTheme } from "../theme";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function TextField(props: TextFieldProps): JSX.Element {
    const {
        type,
        showPasswordElement: showPasswordElementProp,
        hidePasswordElement: hidePasswordElementProp,
        clearElement: clearElementProp,
        clearable,
        className,
        ...textInputProps
    } = useMergeDefaultProps("TextField", props);

    const [showPwd, setShowPwd] = useState(false);

    const {
        icons: { show: Show, hide: Hide, cross: Cross },
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
