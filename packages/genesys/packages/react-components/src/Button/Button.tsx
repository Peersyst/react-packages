import { ButtonContent, ButtonLoader, ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../theme";
import { capitalize, cx, fsx } from "@peersyst/react-utils";
import { MouseEventHandler, useContext } from "react";
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
        onClick: onClickProp,
        style,
        type = "button",
        action,
        ...rest
    } = useMergeDefaultProps("Button", props);

    const { loader: DefaultLoader } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    const { valid, handleSubmit: submit } = useContext(FormContext);
    const disabled = disabledProp || loading || (type === "submit" && valid === false);

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        submit(action);
    };

    const onClick = type === "submit" ? handleSubmit : onClickProp;

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
