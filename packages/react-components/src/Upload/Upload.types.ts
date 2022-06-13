import { ReactElement } from "react";
import { PropsStyle } from "@peersyst/react-types";

export interface UploadProps {
    /**
     * Upload name in form
     */
    name?: string;
    /**
     * File types
     */
    fileTypes?: FileTypes;
    /**
     * Multiple files can be selected
     */
    multiple?: boolean;
    /**
     * Upload is readonly
     */
    readonly?: boolean;
    /**
     * Upload is disabled
     */
    disabled?: boolean;
    /**
     * Upload is required
     */
    required?: boolean;
    /**
     * onChange handler
     */
    onChange?: (files: File | FileList | undefined) => void;
    /**
     * Upload className
     */
    className?: string;
    /**
     * Upload style
     */
    style?: PropsStyle<UploadStyleProps>;
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

export type FileType = "image" | "video" | "directory";

export type FileTypes = "all" | FileType | string | (FileType | string)[];
