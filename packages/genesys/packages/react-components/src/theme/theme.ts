/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import "@peersyst/react-components-core";
import { ThemeBreakpoints, TypographyVariant } from "./theme.types";
import { JSXElementConstructor } from "react";
import { CreateThemeBreakpointValues } from "./createTheme.types";
import { Theme } from "@peersyst/react-components-core";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}

declare module "@peersyst/react-components-core" {
    export interface CoreThemeTypes {
        TypographyType: TypographyVariant;
        UnitsType: string;
    }

    export interface CoreTheme {
        loader: JSXElementConstructor<any>;
        shadows: string[];
        breakpoints: ThemeBreakpoints;
    }

    export interface CoreCreateTheme {
        loader: JSXElementConstructor<any>;
        shadows: string[];
        breakpoints: {
            values: CreateThemeBreakpointValues;
        };
    }
}
