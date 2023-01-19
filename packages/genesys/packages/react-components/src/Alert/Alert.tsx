import { AlertAction, AlertRoot } from "./Alert.styles";
import { AlertProps } from "./Alert.types";
import useGetAlertIcon from "./hook/useGetAlertIcon";
import { Row } from "../Row";
import { capitalize, cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Alert = (props: AlertProps): JSX.Element => {
    const {
        icon: iconProp = true,
        content,
        type,
        action,
        className,
        style,
        elevation = 0,
        square,
    } = useMergeDefaultProps("Alert", props);

    const defaultIcon = useGetAlertIcon(type);
    const icon = iconProp === true ? defaultIcon : iconProp;

    return (
        <AlertRoot
            type={type}
            className={cx("Alert", type && capitalize(type), className)}
            style={style}
            elevation={elevation}
            square={square}
        >
            <Row flex={1} gap={10} wrap wrapGap={10} justifyContent="space-between">
                <Row flex={1} alignItems="flex-start" gap={10}>
                    <Row flex={0.05}>{icon}</Row>
                    <Row flex={0.95}>{content}</Row>
                </Row>
                {action && <AlertAction className="AlertAction">{action}</AlertAction>}
            </Row>
        </AlertRoot>
    );
};

export default Alert;
