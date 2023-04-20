import { CoreLabelProps } from "../Label";
import { CoreTextInputProps } from "../TextInput";

export interface CoreCodeFieldProps<LP extends CoreLabelProps = CoreLabelProps>
    extends Omit<CoreTextInputProps<LP>, "format" | "parse" | "errorElement" | "validElement"> {
    digits: number;
    gap?: number | string;
}
