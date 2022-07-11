import { Children, useContext } from "react";
import { SelectItemsView, SelectMenuRoot } from "./SelectMenu.styles";
import { SelectMenuProps } from "./SelectMenu.types";
import { List } from "../../../display/List";
import { SelectContext, useMergeDefaultProps } from "@peersyst/react-components-core";

export default function SelectMenu(props: SelectMenuProps): JSX.Element {
    const { open, style, header, footer, children } = useMergeDefaultProps("SelectMenu", props);

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
