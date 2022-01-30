import { FormConsumer } from "../Form";
import { ButtonContent, ButtonLoader, ButtonRoot } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../Theme";
import { cx, fsx } from "@peersyst/react-utils";

const Button = function ({
    className,
    disabled,
    children,
    loading,
    loadingElement: loadingElementProp,
    size = "md",
    fullWidth = false,
    onClick,
    style,
}: ButtonProps) {
    const {
        theme: { loader: DefaultLoader },
    } = useTheme();
    const loadingElement = loadingElementProp || <DefaultLoader />;

    return (
        <FormConsumer>
            {({ valid }) => (
                <ButtonRoot
                    isLoading={loading}
                    size={size}
                    fullWidth={fullWidth}
                    disabled={disabled || loading || (valid !== undefined && !valid)}
                    onClick={onClick}
                    className={cx(
                        "Button",
                        loading && "Loading",
                        disabled && "Disabled",
                        className,
                    )}
                    style={fsx(style, { disabled, loading })}
                >
                    <ButtonContent>{children}</ButtonContent>
                    {loading && (
                        <ButtonLoader className="ButtonLoader">{loadingElement}</ButtonLoader>
                    )}
                </ButtonRoot>
            )}
        </FormConsumer>
    );
};

export default Button;
