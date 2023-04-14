import { createStylesheets } from "@peersyst/react-native-styled";
import buttonStylesheet from "./Button.stylesheet";
import textFieldStylesheet from "./TextField.stylesheet";
import textAreaStylesheet from "./TextArea.stylesheet";

export default createStylesheets(buttonStylesheet, textFieldStylesheet, textAreaStylesheet);
