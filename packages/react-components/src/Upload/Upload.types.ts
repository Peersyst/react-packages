import { ReactElement } from "react";
import { FormControlledComponentProps } from "../FormControl";
import { CoreFormControlledComponentProps } from "@peersyst/react-components-core";

export type FileType = "image" | "video" | "directory";

export type FileTypes = "all" | FileType | string | (FileType | string)[];

export interface UploadProps
    extends FormControlledComponentProps<
        CoreFormControlledComponentProps<File | FileList | undefined>
    > {
    /**
     * File types
     */
    fileTypes?: FileTypes;
    /**
     * Multiple files can be selected
     */
    multiple?: boolean;
    /**
     * Upload element
     */
    children?: ReactElement | ((drag: boolean) => ReactElement);
}

export interface UploadStyleProps {
    readonly: boolean;
    disabled: boolean;
    drag: boolean;
}
