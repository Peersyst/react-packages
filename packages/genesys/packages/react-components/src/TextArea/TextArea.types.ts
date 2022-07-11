import { TextInputProps } from "../TextInput/TextInput.types";

export interface TextAreaOwnProps {
    /**
     * TextArea cols
     */
    cols?: number;
    /**
     * TextArea rows
     */
    rows?: number;
}

export type TextAreaProps = TextInputProps & TextAreaOwnProps;
