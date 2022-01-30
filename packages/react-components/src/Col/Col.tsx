import { ColRoot } from "./Col.styles";
import { ColProps } from "./Col.types";

export default function Col(props: ColProps): JSX.Element {
    return <ColRoot {...props} />;
}
