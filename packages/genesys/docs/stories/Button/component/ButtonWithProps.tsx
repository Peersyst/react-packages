import { Button } from "@peersyst/react-components";
import { ButtonProps } from "@peersyst/react-components/Button/Button.types";

export default function ButtonWithProps(props: ButtonProps): JSX.Element {
    return <Button {...props} />;
}
