import TextInput from "../TextInput/TextInput";
import { TextAreaInput } from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function TextArea(props: TextAreaProps): JSX.Element {
    const { cols, rows, className, ...textInputProps } = useMergeDefaultProps("TextArea", props);

    return (
        <TextInput<HTMLTextAreaElement> className={cx("TextArea", className)} {...textInputProps}>
            {(props) => <TextAreaInput {...props} cols={cols || 10} rows={rows || 3} />}
        </TextInput>
    );
}
