import { forwardRef, useState } from "react";
import TextInput from "../TextInput/TextInput";
import { TextFieldInput } from "./TextField.styles";
import { IconButton } from "../IconButton";
import { TextFieldProps } from "./TextField.types";
import { useTheme } from "../theme";
import { cx, setRef } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const TextField = forwardRef(function TextField(rawProps: TextFieldProps, fwdRef): JSX.Element {
    const props = useMergeDefaultProps("TextField", rawProps);

    const {
        type,
        showPasswordElement: showPasswordElementProp,
        hidePasswordElement: hidePasswordElementProp,
        clearElement: clearElementProp,
        clearable,
        className,
        ...textInputProps
    } = props;

    const [showPwd, setShowPwd] = useState(false);

    const {
        icons: { show: Show, hide: Hide, cross: Cross },
    } = useTheme();
    const showPasswordElement = showPasswordElementProp || <Show />;
    const hidePasswordElement = hidePasswordElementProp || <Hide />;
    const clearElement = clearElementProp || <Cross />;

    return (
        <TextInput<HTMLInputElement> className={cx("TextField", className)} {...textInputProps}>
            {({ spellCheck, value, setValue, ref, ...props }) => (
                <>
                    <TextFieldInput
                        {...props}
                        value={value}
                        type={showPwd ? "text" : type || "text"}
                        spellCheck={!(type === "email" || type === "password") || spellCheck}
                        ref={(r) => {
                            setRef(ref, r);
                            setRef(fwdRef, r);
                        }}
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
});

export default TextField;
