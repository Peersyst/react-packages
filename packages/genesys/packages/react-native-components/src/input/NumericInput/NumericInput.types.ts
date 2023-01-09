import { TextInputProps } from "../TextInput";

export type NumericInputProps = Omit<TextInputProps, "keyboardType">;
