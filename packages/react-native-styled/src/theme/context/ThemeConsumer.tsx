import ThemeContext from "./ThemeContext";
import { ReactNode } from "react";
import { Theme } from "../Theme.types";

const ThemeConsumer = ({ children }: { children: (theme: Theme) => ReactNode }) => (
    <ThemeContext.Consumer>{({ theme }) => children(theme)}</ThemeContext.Consumer>
);

export default ThemeConsumer;
