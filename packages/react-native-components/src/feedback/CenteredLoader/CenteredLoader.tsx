import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { Col } from "../../layout/Col";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export type CenteredLoaderProps = Omit<ActivityIndicatorProps, "size">;

const CenteredLoader = (props: CenteredLoaderProps): JSX.Element => {
    const { style, ...rest } = useMergeDefaultProps("CenteredLoader", props);

    return (
        <Col justifyContent="center" style={[{ height: 250 }, style]}>
            <ActivityIndicator size="large" {...rest} />
        </Col>
    );
};

export default CenteredLoader;
