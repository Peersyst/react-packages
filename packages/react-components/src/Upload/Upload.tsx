import { createRef, useState, DragEvent } from "react";
import { useFormNotification } from "../Form";
import { checkFileTypes, getFileTypes, getValue, getValueFromInput } from "./helpers";
import { UploadProps, UploadStyleProps } from "./Upload.types";
import { UploadRoot } from "./Upload.styles";
import { fsx, nullifyEvent, cx } from "@peersyst/react-utils";

export default function Upload({
    name,
    fileTypes,
    multiple,
    className,
    style,
    children,
    onChange,
    readonly = false,
    disabled = false,
    required = false,
}: UploadProps): JSX.Element {
    const [drag, setDrag] = useState(false);
    const [files, setFiles] = useState<File | FileList | undefined>(undefined);
    useFormNotification(name, files, !required || (required && !!files));
    const active = !disabled && !readonly;
    const directory = fileTypes === "directory";
    const uploadRef = createRef<HTMLInputElement>();

    const handleChange = () => {
        const newFiles = getValueFromInput(uploadRef, multiple);
        setFiles(newFiles);
        onChange?.(newFiles);
    };

    const handleDragEnter = (e: DragEvent) => {
        nullifyEvent(e);
        const valid =
            active &&
            e.dataTransfer.items &&
            (multiple ? e.dataTransfer.items.length > 0 : e.dataTransfer.items.length === 1) &&
            checkFileTypes(e.dataTransfer.items, fileTypes);
        valid && setDrag(true);
    };

    const handleDragLeave = (e: DragEvent) => {
        nullifyEvent(e);
        setDrag(false);
    };

    const handleDrop = (e: DragEvent) => {
        nullifyEvent(e);
        if (drag) {
            setDrag(false);
            const files = getValue(e.dataTransfer.files, multiple);
            setFiles(files);
            onChange?.(files);
        }
    };

    const styleProps: UploadStyleProps = {
        readonly,
        disabled,
        drag,
    };

    const directoryProps = directory
        ? {
              directory: "",
              webkitdirectory: "",
              mozdirectory: "",
          }
        : {};

    return (
        <UploadRoot
            className={cx(
                "Upload",
                className,
                readonly && "Readonly",
                disabled && "Disabled",
                drag && "Drag",
            )}
            style={fsx(style, styleProps)}
            onClick={readonly || disabled ? () => undefined : () => uploadRef?.current?.click()}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={nullifyEvent}
            onDrop={handleDrop}
            {...styleProps}
        >
            {typeof children === "function" ? children(drag) : children}
            {active && (
                <input
                    ref={uploadRef}
                    type="file"
                    accept={getFileTypes(fileTypes)}
                    multiple={multiple}
                    onChange={handleChange}
                    {...directoryProps}
                />
            )}
        </UploadRoot>
    );
}
