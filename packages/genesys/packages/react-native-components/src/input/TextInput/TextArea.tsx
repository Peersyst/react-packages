import { TextAreaProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const TextArea = (props: TextAreaProps): JSX.Element => {
    const { numberOfLines = 4, ...rest } = useMergeDefaultProps("TextArea", props);

    return <TextInput multiline numberOfLines={numberOfLines} {...rest} />;
};

export default TextArea;
