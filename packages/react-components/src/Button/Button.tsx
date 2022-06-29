import { ButtonContent, ButtonLoader, ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../Theme";
import { cx, fsx } from "@peersyst/react-utils";
import { useContext } from "react";
import { FormContext } from "@peersyst/react-components-core";

const Button = function ({
    className,
    disabled: disabledProp,
    children,
    loading,
    loadingElement: loadingElementProp,
    size = "md",
    fullWidth = false,
    onClick,
    style,
    type = "button",
    ...rest
}: ButtonProps) {
    const {
        theme: { loader: DefaultLoader },
    } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    const { valid } = useContext(FormContext);
    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    return (
        <ButtonRoot
            isLoading={loading}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            className={cx("Button", loading && "Loading", disabled && "Disabled", className)}
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
