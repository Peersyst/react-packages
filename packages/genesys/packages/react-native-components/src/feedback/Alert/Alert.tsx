import { AlertAction, AlertRoot } from "./Alert.styles";
import { AlertProps } from "./Alert.types";
import useGetAlertIcon from "./hook/useGetAlertIcon";
import { Row } from "../../layout/Row";
import { Text } from "react-native";
import useAlertStyles from "./hook/useAlertStyles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { ElementStyler } from "../../util/ElementStyler";
import { ReactElement, isValidElement } from "react";

const Alert = (props: AlertProps): JSX.Element => {
    const {
        icon: iconProp = true,
        content,
        type,
        action,
        elevation = 0,
        square,
        style: _style,
        ...rest
    } = useMergeDefaultProps("Alert", props);

    const defaultIcon = useGetAlertIcon(type);
    const icon = iconProp === true ? defaultIcon : iconProp;

    const { text: textStyle, container: containerStyle, icon: iconStyle } = useAlertStyles(props);

    return (
        <AlertRoot
            type={type}
            style={containerStyle}
            elevation={elevation}
            square={square}
            {...rest}
        >
            <Row style={{ padding: 14, width: "100%" }}>
                <Row flex={1} gap={10}>
                    {icon && (
                        <Row>
                            <ElementStyler style={iconStyle}>{icon}</ElementStyler>
                        </Row>
                    )}
                    <Row flex={1} alignItems="center" style={{ height: "100%" }}>
                        {typeof content === "string" ? (
                            <Text style={textStyle} lineBreakMode="head">
                                {content}
                            </Text>
                        ) : isValidElement(content) ? (
                            <ElementStyler style={textStyle}>
                                {content as ReactElement}
                            </ElementStyler>
                        ) : (
                            content
                        )}
                    </Row>
                </Row>
                {action && <AlertAction style={textStyle}>{action}</AlertAction>}
            </Row>
        </AlertRoot>
    );
};

export default Alert;
