import { Children, ReactElement } from "react";
import { SelectItemsView, SelectMenuRoot } from "./SelectMenu.styles";
import { SelectMenuProps } from "./SelectMenu.types";
import { List } from "../../../display/List";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Keyboard } from "react-native";

export default function SelectMenu(props: SelectMenuProps): JSX.Element {
    const {
        open,
        style: {
            content: {
                list: { container: containerStyle = {}, ...listStyle } = {},
                ...contentStyle
            } = {},
            ...rootStyle
        } = {},
        header,
        footer,
        children,
        setOpen,
    } = useMergeDefaultProps("SelectMenu", props);

    return (
        <SelectMenuRoot
            open={open}
            style={rootStyle}
            onClose={() => setOpen(false)}
            onOpen={() => Keyboard.dismiss()}
        >
            {header}
            <SelectItemsView itemCount={Children.count(children)} style={contentStyle}>
                <List
                    data={Children.toArray(children) as ReactElement[]}
                    renderItem={({ item }) => item}
                    style={listStyle}
                    contentContainerStyle={{
                        paddingTop: header ? 0 : 20,
                        paddingBottom: footer ? 0 : 20,
                        ...containerStyle,
                    }}
                />
            </SelectItemsView>
            {footer}
        </SelectMenuRoot>
    );
}
