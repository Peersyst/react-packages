import { IconButtonProps, IconButtonStyles } from "../../input/IconButton";

export interface CopyButtonProps extends Omit<IconButtonProps, "children" | "onPress"> {
    text: string;
    style?: IconButtonStyles;
    message?: string;
}
