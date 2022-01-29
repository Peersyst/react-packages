import { ColRoot } from "./Col.styles";
import { ColProps } from "./Col.types";

export function Col(props: ColProps): JSX.Element {
    return <ColRoot {...props} />;
}
