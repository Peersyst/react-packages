import { TextFieldProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const TextField = (props: TextFieldProps): JSX.Element => {
    const mergedProps = useMergeDefaultProps("TextField", props);

    return <TextInput {...mergedProps} />;
};

export default TextField;
