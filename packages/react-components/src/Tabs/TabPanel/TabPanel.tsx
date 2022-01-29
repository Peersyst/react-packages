import { TabsConsumer } from "../TabsContext";
import { TabPanelRoot } from "./TabPanel.styles";
import { TabPanelProps } from "./TabPanel.types";
import { cx } from "../../utils/cx";

export function TabPanel({ index, className, style, children }: TabPanelProps): JSX.Element {
    return (
        <TabsConsumer>
            {({ activeIndex }) => (
                <>
                    {activeIndex === index && (
                        <TabPanelRoot className={cx("TabPanel", className)} style={style || {}}>
                            {children}
                        </TabPanelRoot>
                    )}
                </>
            )}
        </TabsConsumer>
    );
}
