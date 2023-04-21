import { TextAreaProps } from "./TextInput.types";
import TextInput from "./TextInput";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useTextAreaStyles } from "./hooks";
import { forwardRef } from "react";

const TextArea = forwardRef(function TextArea(rawProps: TextAreaProps, ref): JSX.Element {
    const props = useMergeDefaultProps("TextArea", rawProps);

    const { numberOfLines = 4, style: _style, ...rest } = props;

    const style = useTextAreaStyles(props);

    return <TextInput multiline numberOfLines={numberOfLines} style={style} ref={ref} {...rest} />;
});

export default TextArea;
