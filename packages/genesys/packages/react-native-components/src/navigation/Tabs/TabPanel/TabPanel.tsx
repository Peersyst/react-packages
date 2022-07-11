import { TabsConsumer } from "../TabsContext";
import { TabPanelRoot } from "./TabPanel.styles";
import { TabPanelProps } from "./TabPanel.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function TabPanel(props: TabPanelProps): JSX.Element {
    const { index, style, children } = useMergeDefaultProps("TabPanel", props);

    return (
        <TabsConsumer>
            {({ activeIndex }) => (
                <>
                    {activeIndex === index && <TabPanelRoot style={style}>{children}</TabPanelRoot>}
                </>
            )}
        </TabsConsumer>
    );
}
