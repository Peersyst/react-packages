import React, { ReactNode } from "react";
import { ThemeConsumer as StyledComponentsConsumer } from "styled-components";
import { ThemeContextType } from "./Theme.types";
import { ThemeContext } from "./ThemeProvider";

export function ThemeConsumer({ children }: { children: (props: ThemeContextType) => ReactNode }) {
    return (
        <ThemeContext.Consumer>
            {({ colorScheme, setColorScheme }) => (
                <StyledComponentsConsumer>{(theme) => children({ colorScheme, setColorScheme, theme })}</StyledComponentsConsumer>
            )}
        </ThemeContext.Consumer>
    );
}
