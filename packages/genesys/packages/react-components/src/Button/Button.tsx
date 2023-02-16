import { ButtonContent, ButtonLoader, ButtonRoot } from "./Button.styles";
import { useTheme } from "../theme";
import { capitalize, cx, filter, fsx } from "@peersyst/react-utils";
import { MouseEventHandler } from "react";
import { ButtonProps, useButton } from "@peersyst/react-components-core";

const Button = (props: ButtonProps): JSX.Element => {
    const {
        className,
        disabled,
        children,
        loading,
        loadingElement: loadingElementProp,
        variant = "filled",
        size = "sm",
        fullWidth = false,
        onClick: onClickProp,
        style,
        type = "button",
        color,
        handleSubmit,
        enabled,
        ...rest
    } = useButton(props);

    const buttonElementProps = filter(rest, "action");

    const { loader: DefaultLoader } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (handleSubmit) {
            e.preventDefault();
            handleSubmit();
        } else onClickProp?.(e);
    };

    return (
        <ButtonRoot
            isLoading={loading}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            onClick={enabled ? handleClick : undefined}
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
            color={color}
            {...buttonElementProps}
        >
            <ButtonContent>{children}</ButtonContent>
            {loading && <ButtonLoader className="ButtonLoader">{loadingElement}</ButtonLoader>}
        </ButtonRoot>
    );
};

export default Button;
