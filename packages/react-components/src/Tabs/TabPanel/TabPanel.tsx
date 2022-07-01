import { TabsConsumer } from "../TabsContext";
import { TabPanelRoot } from "./TabPanel.styles";
import { TabPanelProps } from "./TabPanel.types";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function TabPanel(props: TabPanelProps): JSX.Element {
    const { index, className, style, children } = useMergeDefaultProps("TabPanel", props);

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
