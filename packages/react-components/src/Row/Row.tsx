import { RowRoot } from "./Row.styles";
import { RowProps } from "./Row.types";

export default function Row({ wrap, ...rest }: RowProps): JSX.Element {
    return <RowRoot {...rest} shouldWrap={wrap} />;
}
