import TextInput from "../TextInput/TextInput";
import { TextAreaInput } from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";
import { cx, setRef } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { forwardRef } from "react";

const TextArea = forwardRef(function TextArea(props: TextAreaProps, ref): JSX.Element {
    const { cols, rows, className, ...textInputProps } = useMergeDefaultProps("TextArea", props);

    return (
        <TextInput<HTMLTextAreaElement> className={cx("TextArea", className)} {...textInputProps}>
            {(props) => (
                <TextAreaInput
                    {...props}
                    cols={cols || 10}
                    rows={rows || 3}
                    ref={(r) => setRef(ref, r)}
                />
            )}
        </TextInput>
    );
});

export default TextArea;
