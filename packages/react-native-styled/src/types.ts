import { Theme } from "@peersyst/react-native-styled";
import { ScaledSize } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { AnyObject, Inject } from "@peersyst/react-types";
import { FromTheme } from "./accessors/fromTheme";
import { FromProps } from "./accessors/fromProps";
import { FromDimensions } from "./accessors/fromDimensions";
import { FromSafeAreaInsets } from "./accessors/fromSafeAreaInsets";

export type Styled<S> = Omit<S, "color"> & { color?: string };

export type SX<TStyle> = (p: {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
}) => TStyle;

export type StyledParams<P extends { style?: P["style"] }, E = {}> = {
    theme: Theme;
    dimensions: ScaledSize;
    safeAreaInsets: EdgeInsets;
} & P &
    E;

export type StyledFunction<P extends { style?: P["style"] }, E = {}> = (
    params: StyledParams<P, E>,
) => Stylesheet<P["style"]>;

export type StylesheetParams<P> = {
    fromTheme: FromTheme;
    fromProps: FromProps<P>;
    fromDimensions: FromDimensions;
    fromSafeAreaInsets: FromSafeAreaInsets;
};

export type StylesheetFunction<P extends { style?: P["style"] }> = (
    params: StylesheetParams<P>,
) => Stylesheet<P["style"]>;

export type StyledComponentProps<S> = { sx?: SX<S>; style?: S };

export type StylesheetAccessor<R> = (...args: any[]) => R | StylesheetAccessor<R>;

export type Stylesheet<S> = S extends AnyObject
    ? Inject<
          {
              [K in keyof S]: S[K] extends AnyObject | undefined
                  ? Inject<Stylesheet<S[K]>, { currentColor?: string | StylesheetAccessor<string> }>
                  : S[K] | ((...args: any[]) => S[K]);
          },
          { currentColor?: string | StylesheetAccessor<string> }
      >
    : S;

export type StylesheetMetadata = {
    component: string;
    isStylesheet: true;
};

export type StylesheetWithMetadata<S> = Stylesheet<S> & { _metadata: StylesheetMetadata };
