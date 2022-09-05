import { AlertAction, AlertRoot } from "./Alert.styles";
import { AlertProps } from "./Alert.types";
import useGetAlertIcon from "./hook/useGetAlertIcon";
import { Row } from "../Row";
import { capitalize, cx } from "@peersyst/react-utils";

const Alert = ({
    icon: iconProp = true,
    message,
    type,
    action,
    className,
    style,
}: AlertProps): JSX.Element => {
    const defaultIcon = useGetAlertIcon(type);
    const icon = iconProp === true ? defaultIcon : iconProp;

    return (
        <AlertRoot
            type={type}
            className={cx("Alert", type && capitalize(type), className)}
            style={style}
        >
            <Row flex={1} gap={10} wrap wrapGap={10} justifyContent="space-between">
                <Row flex={1} alignItems="center" gap={10}>
                    <Row flex={0.05}>{icon}</Row>
                    <Row flex={0.95}>{message}</Row>
                </Row>
                {action && <AlertAction className="AlertAction">{action}</AlertAction>}
            </Row>
        </AlertRoot>
    );
};

export default Alert;
