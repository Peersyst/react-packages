import { Button, ButtonProps } from "@peersyst/react-components";

export default function ButtonWithProps(props: ButtonProps): JSX.Element {
    return <Button {...props} />;
}
