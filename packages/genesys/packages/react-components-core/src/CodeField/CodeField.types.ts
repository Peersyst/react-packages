import { CoreLabelProps } from "../Label";
import { CoreTextInputProps } from "../TextInput";

export type CodeFieldType = "numeric" | "alphanumeric";

export interface CoreCodeFieldProps<LP extends CoreLabelProps = CoreLabelProps>
    extends Omit<CoreTextInputProps<LP>, "format" | "parse" | "errorElement" | "validElement"> {
    type?: CodeFieldType;
    digits: number;
    gap?: number | string;
}
