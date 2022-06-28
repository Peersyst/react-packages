import { Children, useContext } from "react";
import { SelectItemsView, SelectMenuRoot } from "./SelectMenu.styles";
import { SelectMenuProps } from "./SelectMenu.types";
import { List } from "../../../display/List";
import { SelectContext } from "@peersyst/react-components-core";

export default function SelectMenu({
    open,
    style,
    header,
    footer,
    children,
}: SelectMenuProps): JSX.Element {
    const { setOpen } = useContext(SelectContext);

    return (
        <SelectMenuRoot open={open} style={style} onClose={() => setOpen(false)}>
            {header}
            <SelectItemsView itemCount={Children.count(children)}>
                <List
                    data={Children.toArray(children)}
                    renderItem={({ item }) => item}
                    contentContainerStyle={{
                        paddingTop: header ? 0 : 20,
                        paddingBottom: footer ? 0 : 20,
                    }}
                />
            </SelectItemsView>
            {footer}
        </SelectMenuRoot>
    );
}
