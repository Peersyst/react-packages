import { RowRoot } from "./Row.styles";
import { RowProps } from "./Row.types";

export function Row({ wrap, ...rest }: RowProps): JSX.Element {
    return <RowRoot {...rest} shouldWrap={wrap} />;
}
