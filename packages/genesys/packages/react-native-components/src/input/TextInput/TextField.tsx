import { TextFieldProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useTextFieldStyles } from "./hooks";
import { forwardRef } from "react";

const TextField = forwardRef(function TextField(rawProps: TextFieldProps, ref): JSX.Element {
    const props = useMergeDefaultProps("TextField", rawProps);

    const { style: _style, ...rest } = props;

    const style = useTextFieldStyles(props);

    return <TextInput style={style} ref={ref} {...rest} />;
});

export default TextField;
