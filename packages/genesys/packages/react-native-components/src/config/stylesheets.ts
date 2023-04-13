import { createStylesheets } from "@peersyst/react-native-styled";
import { buttonStylesheet } from "../input/Button";
import { alertStylesheet } from "../feedback/Alert";
import { formControlLabelStylesheet } from "../input/FormControlLabel";
import { swipeButtonStylesheet } from "../input/SwipeButton/SwipeButton.stylesheet";
import { textInputStylesheet } from "../input/TextInput";

export default createStylesheets(
    buttonStylesheet,
    alertStylesheet,
    formControlLabelStylesheet,
    swipeButtonStylesheet,
    textInputStylesheet,
);
