import { AlertAction, AlertRoot } from "./Alert.styles";
import { AlertProps } from "./Alert.types";
import useGetAlertIcon from "./hook/useGetAlertIcon";
import { Row } from "../../layout/Row";
import { Icon } from "../../display/Icon";
import { Text } from "react-native";
import { Col } from "../../layout/Col";
import useAlertStyles from "./hook/useAlertStyles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Alert = (props: AlertProps): JSX.Element => {
    const {
        icon: iconProp = true,
        content,
        type,
        action,
        elevation = 0,
        square,
        style: _style,
    } = useMergeDefaultProps("Alert", props);

    const defaultIcon = useGetAlertIcon(type);
    const icon = iconProp === true ? defaultIcon : iconProp;

    const { text: textStyle, container: containerStyle } = useAlertStyles(props);

    return (
        <AlertRoot type={type} style={containerStyle} elevation={elevation} square={square}>
            <Col flex={1} style={{ padding: 14 }}>
                <Row flex={1} alignItems="center" gap={10}>
                    {icon && (
                        <Row>
                            <Icon style={textStyle}>{icon}</Icon>
                        </Row>
                    )}
                    <Row flex={1}>
                        {typeof content === "string" ? (
                            <Text style={textStyle} lineBreakMode="head">
                                {content}
                            </Text>
                        ) : (
                            content
                        )}
                    </Row>
                </Row>
                {action && <AlertAction style={textStyle}>{action}</AlertAction>}
            </Col>
        </AlertRoot>
    );
};

export default Alert;
