import { ButtonContent, ButtonLoader, ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../theme";
import { capitalize, cx, fsx } from "@peersyst/react-utils";
import { useContext } from "react";
import { FormContext, useMergeDefaultProps } from "@peersyst/react-components-core";

const Button = (props: ButtonProps): JSX.Element => {
    const {
        className,
        disabled: disabledProp,
        children,
        loading,
        loadingElement: loadingElementProp,
        variant = "filled",
        size = "sm",
        fullWidth = false,
        onClick,
        style,
        type = "button",
        ...rest
    } = useMergeDefaultProps("Button", props);

    const { loader: DefaultLoader } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    const { valid } = useContext(FormContext);
    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    return (
        <ButtonRoot
            isLoading={loading}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            className={cx(
                "Button",
                loading && "Loading",
                disabled && "Disabled",
                capitalize(size),
                capitalize(variant),
                className,
            )}
            style={fsx(style, { disabled, loading })}
            type={type}
            {...rest}
        >
            <ButtonContent>{children}</ButtonContent>
            {loading && <ButtonLoader className="ButtonLoader">{loadingElement}</ButtonLoader>}
        </ButtonRoot>
    );
};

export default Button;
