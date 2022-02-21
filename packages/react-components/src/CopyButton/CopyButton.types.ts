import { IconButtonProps } from "../IconButton";

export interface CopyButtonProps extends Omit<IconButtonProps, "onClick" | "children"> {
    /**
     * Text to copy
     */
    text: string;
    /**
     * onCopy handler
     */
    onCopy?: () => unknown;
}
