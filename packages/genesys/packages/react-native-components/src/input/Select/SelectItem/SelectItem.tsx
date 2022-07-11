import { SelectItemRoot, SelectItemText } from "./SelectItem.styles";
import { InnerSelectItemProps, SelectItemProps } from "./SelectItem.types";
import useSelectItemStyle from "./hooks/useSelectIemStyles";
import { TouchableWithoutFeedback } from "react-native";
import { getLuminance } from "@peersyst/react-utils";
import {
    SelectItem as CoreSelectItem,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";

function InnerSelectItem<T>({
    isSelected,
    setSelected,
    readonly,
    children,
    style,
}: InnerSelectItemProps<T>): JSX.Element {
    const [textStyle, rootStyle] = useSelectItemStyle(style, isSelected, readonly);

    return (
        <TouchableWithoutFeedback onPress={setSelected}>
            <SelectItemRoot style={rootStyle}>
                {typeof children === "string" ? (
                    <SelectItemText
                        style={[
                            textStyle,
                            rootStyle.backgroundColor && rootStyle.backgroundColor !== "transparent"
                                ? {
                                      color:
                                          getLuminance(rootStyle.backgroundColor as string) > 0.5
                                              ? "#000000"
                                              : "#FFFFFF",
                                  }
                                : undefined,
                        ]}
                        numberOfLines={1}
                    >
                        {children}
                    </SelectItemText>
                ) : (
                    children
                )}
            </SelectItemRoot>
        </TouchableWithoutFeedback>
    );
}

export default function SelectItem<T = any>(props: SelectItemProps<T>): JSX.Element {
    const { children, value, style = {} } = useMergeDefaultProps("SelectItem", props);

    return (
        <CoreSelectItem value={value}>
            {({ isSelected, setSelected, readonly }) => (
                <InnerSelectItem
                    isSelected={isSelected}
                    setSelected={setSelected}
                    readonly={readonly}
                    style={style}
                >
                    {children}
                </InnerSelectItem>
            )}
        </CoreSelectItem>
    );
}
