import { TextAreaProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { TextInputProps } from "react-native";

function TextArea<P extends TextInputProps = TextInputProps>(props: TextAreaProps<P>): JSX.Element {
    const { numberOfLines = 4, ...rest } = useMergeDefaultProps("TextArea", props);
    return <TextInput<P> multiline numberOfLines={numberOfLines} {...rest} />;
}

export default TextArea;
