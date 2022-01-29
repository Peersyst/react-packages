import TextInput from "../TextInput/TextInput";
import { TextAreaInput } from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";
import { cx } from "../utils/cx";

export function TextArea({ cols, rows, className, ...textInputProps }: TextAreaProps): JSX.Element {
    return (
        <TextInput<HTMLTextAreaElement> className={cx("TextArea", className)} {...textInputProps}>
            {(props) => <TextAreaInput {...props} cols={cols || 10} rows={rows || 3} />}
        </TextInput>
    );
}
