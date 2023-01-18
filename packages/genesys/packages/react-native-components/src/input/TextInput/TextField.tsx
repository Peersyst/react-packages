import { TextFieldProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { TextInputProps } from "react-native";

function TextField<P extends TextInputProps = TextInputProps>(
    props: TextFieldProps<P>,
): JSX.Element {
    const mergedProps = useMergeDefaultProps("TextField", props);

    return <TextInput<P> {...mergedProps} />;
}

export default TextField;
