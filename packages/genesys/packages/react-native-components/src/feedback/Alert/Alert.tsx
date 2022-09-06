import { AlertAction, AlertRoot } from "./Alert.styles";
import { AlertProps } from "./Alert.types";
import useGetAlertIcon from "./hook/useGetAlertIcon";
import { Row } from "../../layout/Row";
import { Icon } from "../../display/Icon";
import { Text } from "react-native";
import { Col } from "../../layout/Col";
import useAlertStyles from "./hook/useAlertStyles";

const Alert = ({
    icon: iconProp = true,
    message,
    type,
    action,
    style,
}: AlertProps): JSX.Element => {
    const defaultIcon = useGetAlertIcon(type);
    const icon = iconProp === true ? defaultIcon : iconProp;

    const { text: textStyle, container: containerStyle } = useAlertStyles(style || {}, type);

    return (
        <AlertRoot type={type} style={containerStyle}>
            <Col flex={1} style={{ padding: 14 }}>
                <Row flex={1} alignItems="center" gap={10}>
                    {icon && (
                        <Row>
                            <Icon style={textStyle}>{icon}</Icon>
                        </Row>
                    )}
                    <Row flex={1}>
                        <Text style={textStyle} lineBreakMode="head">
                            {message}
                        </Text>
                    </Row>
                </Row>
                {action && <AlertAction style={textStyle}>{action}</AlertAction>}
            </Col>
        </AlertRoot>
    );
};

export default Alert;