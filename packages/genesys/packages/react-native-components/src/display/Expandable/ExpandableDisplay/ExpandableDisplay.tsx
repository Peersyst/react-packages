import { useMergeDefaultProps, useTheme } from "@peersyst/react-components-core";
import { ExpandableDisplayProps } from "./ExpandableDisplay.types";
import { useExpandableContext } from "../context";
import { useExpandableDisplayStyles } from "./hooks";
import { ExpandableDisplayRoot } from "./ExpandableDisplay.styles";
import { ElementStyler } from "../../../util/ElementStyler";
import { JSXElementConstructor, ReactElement, isValidElement } from "react";
import { Text, View } from "react-native";

const ExpandableDisplay = (rawProps: ExpandableDisplayProps): JSX.Element => {
    const props = useMergeDefaultProps("ExpandableDisplay", rawProps);

    const {
        icons: { chevronDown: ChevronDown },
    } = useTheme();

    const { icon: iconProp = true, reverse = false, children, style: _style } = props;

    const { open, toggle } = useExpandableContext();

    const { rootStyle, contentStyle, iconStyle } = useExpandableDisplayStyles(props, open);

    const icon = iconProp === true ? <ChevronDown /> : iconProp;

    return (
        <ExpandableDisplayRoot onPress={toggle} reverse={reverse} style={rootStyle}>
            <View style={{ flex: 1 }}>
                {isValidElement(children) ? (
                    <ElementStyler style={contentStyle}>
                        {
                            children as ReactElement<
                                { style?: any },
                                string | JSXElementConstructor<any>
                            >
                        }
                    </ElementStyler>
                ) : (
                    <Text style={contentStyle} adjustsFontSizeToFit>
                        {children}
                    </Text>
                )}
            </View>
            {icon && (
                <View style={{ transform: [{ rotateZ: open ? "180deg" : "0deg" }] }}>
                    <ElementStyler style={{ ...contentStyle, ...iconStyle }}>
                        {icon as ReactElement<{ style?: any }, string | JSXElementConstructor<any>>}
                    </ElementStyler>
                </View>
            )}
        </ExpandableDisplayRoot>
    );
};

export default ExpandableDisplay;
