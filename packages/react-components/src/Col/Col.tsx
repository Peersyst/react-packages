import { ColRoot } from "./Col.styles";
import { ColProps } from "./Col.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export default function Col(props: ColProps): JSX.Element {
    const mergedProps = useMergeDefaultProps("Col", props);

    return <ColRoot {...mergedProps} />;
}
