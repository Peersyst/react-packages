import { ThemeProps } from "../Theme.types";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ theme, children }: ThemeProps): JSX.Element => {
    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
