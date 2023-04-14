import { TextFieldProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useTextFieldStyles } from "./hooks";

function TextField(rawProps: TextFieldProps): JSX.Element {
    const props = useMergeDefaultProps("TextField", rawProps);

    const { style: _style, ...rest } = props;

    const style = useTextFieldStyles(props);

    return <TextInput style={style} {...rest} />;
}

export default TextField;
