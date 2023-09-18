import { createStylesheets } from "@peersyst/react-native-styled";
import { buttonStylesheet } from "../input/Button";
import { alertStylesheet } from "../feedback/Alert";
import { formControlLabelStylesheet } from "../input/FormControlLabel";
import { swipeButtonStylesheet } from "../input/SwipeButton/SwipeButton.stylesheet";
import { textInputStylesheet } from "../input/TextInput";
import { iconButtonStylesheet } from "../input/IconButton";
import { radioButtonStylesheet } from "../input/RadioButton";
import { selectStylesheet, selectItemStylesheet } from "../input/Select";
import { switchStylesheet } from "../input/Switch";
import { chipStylesheet } from "../display/Chip";
import { typographyStylesheet } from "../display/Typography";
import {
    expandableDisplayStylesheet,
    expandableStylesheet,
    expandableContentStylesheet,
} from "../display/Expandable";
import { circularProgressStylesheet } from "../feedback/CircularProgress";

export default createStylesheets(
    buttonStylesheet,
    alertStylesheet,
    formControlLabelStylesheet,
    swipeButtonStylesheet,
    textInputStylesheet,
    iconButtonStylesheet,
    radioButtonStylesheet,
    selectStylesheet,
    selectItemStylesheet,
    switchStylesheet,
    chipStylesheet,
    typographyStylesheet,
    expandableDisplayStylesheet,
    expandableStylesheet,
    expandableContentStylesheet,
    circularProgressStylesheet,
);
