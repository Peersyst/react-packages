import { SelectItemRoot, SelectItemText } from "./SelectItem.styles";
import { InnerSelectItemProps, SelectItemProps } from "./SelectItem.types";
import { TouchableWithoutFeedback, Text } from "react-native";
import { getLuminance } from "@peersyst/react-utils";
import {
    SelectItem as CoreSelectItem,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { isValidElement } from "react";
import { useSelectItemStyles } from "./hooks";

function InnerSelectItem<T>(props: InnerSelectItemProps<T>): JSX.Element {
    const { value, isSelected, setSelected, readonly, children, style: _style } = props;

    const [textStyle, rootStyle] = useSelectItemStyles(props, isSelected, readonly);

    return (
        <TouchableWithoutFeedback onPress={setSelected}>
            <SelectItemRoot style={rootStyle}>
                <SelectItemText
                    isClearItem={value === undefined}
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
                >
                    {isValidElement(children) ? (
                        children
                    ) : (
                        <Text numberOfLines={1}>{children}</Text>
                    )}
                </SelectItemText>
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
                    value={value}
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
