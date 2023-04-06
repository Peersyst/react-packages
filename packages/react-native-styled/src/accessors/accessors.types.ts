import { StyledParams, Stylesheet, StyledComponentProps } from "../types";

export type AccessorFn<R = any> = <P extends StyledComponentProps<P["style"]>>(
    params: StyledParams<P>,
    styles: Stylesheet<P["style"]>,
    property: string,
) => R;

export type Accessor<R = any> = AccessorFn<R> & {
    isStyledAccessor: true;
};
