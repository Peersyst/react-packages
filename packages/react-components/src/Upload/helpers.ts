import { RefObject } from "react";
import { FileType, FileTypes } from "./Upload.types";

export function getValue(newFiles: FileList, multiple?: boolean): File | FileList | undefined {
    if (multiple) return newFiles.length ? newFiles : undefined;
    else if (newFiles.length === 1) return newFiles[0];
    else return undefined;
}

export function getValueFromInput(
    uploadRef: RefObject<HTMLInputElement>,
    multiple?: boolean,
): File | FileList | undefined {
    const newFiles = (uploadRef.current?.files || []) as FileList;
    return getValue(newFiles, multiple);
}

export function getFileType(fileType: FileType | string): string | undefined {
    switch (fileType) {
        case "all":
        case "directory":
            return undefined;
        case "image":
            return "image/*";
        case "video":
            return "video/*";
        default:
            return fileType;
    }
}

export function getFileTypes(fileTypes?: FileTypes): string | undefined {
    if (typeof fileTypes === "string") return getFileType(fileTypes);
    else return fileTypes?.map((f) => getFileType(f)).join(",");
}

export function checkFileTypes(fileList: DataTransferItemList, fileTypes?: FileTypes): boolean {
    const types = fileTypes && getFileTypes(fileTypes)?.split(", ");
    if (!types || types.includes("all")) return true;

    for (let i = 0; i < fileList.length; i++) {
        if (!types.some((type) => fileList[i]?.type.match(type))) return false;
    }
    return true;
}
