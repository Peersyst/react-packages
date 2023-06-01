import { ExpandableProps } from "./Expandable.types";
import { rack } from "@peersyst/react-utils";
import { View } from "react-native";
import { ExpandableDisplay } from "./ExpandableDisplay";
import { ExpandableContent } from "./ExpandableContent";
import { ElementStyler } from "../../util/ElementStyler";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useControlled } from "@peersyst/react-hooks";
import { ExpandableProvider } from "./context";
import { useExpandableStyles } from "./hooks";
import { ForwardedRef } from "react";

const Expandable = rack(
    function Expandable(rawProps: ExpandableProps, slots, ref: ForwardedRef<View>) {
        const props = useMergeDefaultProps("Expandable", rawProps);

        const { defaultOpen = false, open: openProp, onOpen, onClose, style: _style } = props;

        const [open, setOpen] = useControlled(defaultOpen, openProp, openProp ? onClose : onOpen);

        const toggle = () => {
            setOpen(!open);
        };

        const { rootStyle, displayStyle, contentStyle } = useExpandableStyles(props, open);

        return (
            <View style={rootStyle} ref={ref}>
                <ExpandableProvider value={{ open, toggle }}>
                    <ElementStyler style={displayStyle}>{slots.Display}</ElementStyler>
                    <ElementStyler style={contentStyle}>{slots.Content}</ElementStyler>
                </ExpandableProvider>
            </View>
        );
    },
    ["Display", "Content"],
    {
        Display: ExpandableDisplay,
        Content: ExpandableContent,
    },
);

export default Expandable;
