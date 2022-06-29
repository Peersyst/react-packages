import { SelectItemRoot } from "./SelectItem.styles";
import { SelectItemProps } from "./SelectItem.types";
import { fsx, cx } from "@peersyst/react-utils";
import { SelectItem as CoreSelectItem } from "@peersyst/react-components-core";

export default function SelectItem<T = any>({
    children,
    value,
    className,
    style,
}: SelectItemProps<T>): JSX.Element {
    return (
        <CoreSelectItem value={value}>
            {({ isSelected, setSelected, readonly }) => {
                const styleProps = { selected: isSelected };

                return (
                    <SelectItemRoot
                        onClick={setSelected}
                        selected={isSelected}
                        readonly={readonly}
                        className={cx(className, "SelectItem", isSelected && "Selected")}
                        style={fsx(style, styleProps)}
                    >
                        {children}
                    </SelectItemRoot>
                );
            }}
        </CoreSelectItem>
    );
}
