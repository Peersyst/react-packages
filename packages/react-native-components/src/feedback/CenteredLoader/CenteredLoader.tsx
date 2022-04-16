import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { Col } from "../../layout/Col";

export type CenteredLoaderProps = Omit<ActivityIndicatorProps, "size">;

const CenteredLoader = ({ style, ...rest }: CenteredLoaderProps): JSX.Element => (
    <Col justifyContent="center" style={[{ height: 250 }, style]}>
        <ActivityIndicator size="large" {...rest} />
    </Col>
);

export default CenteredLoader;
