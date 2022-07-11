import { createRef, useContext, useEffect } from "react";
import { TabsContext } from "../TabsContext";
import { TabRoot } from "./Tab.styles";
import { TabProps, TabStyleProps } from "./Tab.types";
import { fsx, cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Tab(props: TabProps): JSX.Element {
    const { index, className, style, children } = useMergeDefaultProps("Tab", props);

    const ref = createRef<HTMLDivElement>();
    const { activeIndex, onTabChange, setActiveRef } = useContext(TabsContext);

    const isActive = activeIndex === index;

    useEffect(() => {
        if (isActive) setActiveRef(ref.current);
    }, [isActive, setActiveRef]);

    const styleProps: TabStyleProps = { active: isActive };

    return (
        <TabRoot
            className={cx(className, "TabsTab", isActive && "Active")}
            style={fsx(style, styleProps)}
            onClick={() => onTabChange(index)}
            ref={ref}
        >
            {children}
        </TabRoot>
    );
}
