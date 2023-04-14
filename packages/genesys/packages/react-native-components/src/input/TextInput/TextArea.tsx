import { TextAreaProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useTextAreaStyles } from "./hooks";

function TextArea(rawProps: TextAreaProps): JSX.Element {
    const props = useMergeDefaultProps("TextArea", rawProps);

    const { numberOfLines = 4, style: _style, ...rest } = props;

    const style = useTextAreaStyles(props);

    return <TextInput multiline numberOfLines={numberOfLines} style={style} {...rest} />;
}

export default TextArea;
