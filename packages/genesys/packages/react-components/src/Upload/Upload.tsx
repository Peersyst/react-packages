import { createRef, useState, DragEvent } from "react";
import { checkFileTypes, getFileTypes, getValue, getValueFromInput } from "./helpers";
import { UploadProps, UploadStyleProps } from "./Upload.types";
import { UploadRoot } from "./Upload.styles";
import { nullifyEvent, cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Upload(props: UploadProps): JSX.Element {
    const {
        defaultValue,
        fileTypes,
        multiple,
        children,
        readonly = false,
        disabled = false,
        LabelProps = {},
        Label = FormControlLabel,
        ...rest
    } = useMergeDefaultProps("Upload", props);

    const [drag, setDrag] = useState(false);
    const active = !disabled && !readonly;
    const directory = fileTypes === "directory";
    const uploadRef = createRef<HTMLInputElement>();

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

    const directoryProps = directory
        ? {
              directory: "",
              webkitdirectory: "",
              mozdirectory: "",
          }
        : {};

    return (
        <FormControl<File | FileList | undefined>
            Label={[Label, LabelProps]}
            defaultValue={defaultValue}
            readonly={readonly}
            disabled={disabled}
            {...rest}
        >
            {(value, setValue) => {
                const handleChange = () => {
                    const newFiles = getValueFromInput(uploadRef, multiple);
                    setValue(newFiles);
                };

                const handleDrop = (e: DragEvent) => {
                    nullifyEvent(e);
                    if (drag) {
                        setDrag(false);
                        const files = getValue(e.dataTransfer.files, multiple);
                        setValue(files);
                    }
                };

                const styleProps: UploadStyleProps = {
                    readonly,
                    disabled,
                    drag,
                };

                return (
                    <UploadRoot
                        className={cx(
                            "Upload",
                            readonly && "Readonly",
                            disabled && "Disabled",
                            drag && "Drag",
                        )}
                        onClick={
                            readonly || disabled
                                ? () => undefined
                                : () => uploadRef?.current?.click()
                        }
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={nullifyEvent}
                        onDrop={handleDrop}
                        {...styleProps}
                    >
                        {typeof children === "function" ? children(drag) : children}
                        {active && (
                            <input
                                data-testid="upload"
                                ref={uploadRef}
                                type="file"
                                value=""
                                accept={getFileTypes(fileTypes)}
                                multiple={multiple}
                                onChange={handleChange}
                                {...directoryProps}
                            />
                        )}
                    </UploadRoot>
                );
            }}
        </FormControl>
    );
}
