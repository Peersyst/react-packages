import { SelectItemRoot } from "./SelectItem.styles";
import { SelectItemProps } from "./SelectItem.types";
import { fsx, cx } from "@peersyst/react-utils";
import {
    SelectItem as CoreSelectItem,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";

export default function SelectItem<T = any>(props: SelectItemProps<T>): JSX.Element {
    const { children, value, className, style } = useMergeDefaultProps("SelectItem", props);

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
