import { ComponentsConfig } from "./components.config.types";
import { ChevronDownIcon } from "../assets/icons";
import { FormControlLabel } from "../input/FormControlLabel";

const componentsConfig: ComponentsConfig = {
    Alert: { defaultProps: {} },
    Divider: {
        defaultProps: {
            size: 1,
            width: "full-width",
        },
    },
    Icon: {
        defaultProps: {},
    },
    Image: {
        defaultProps: {},
    },
    Label: {
        defaultProps: {
            placement: "top",
            alignment: "start",
            gap: 10,
        },
    },
    List: {
        defaultProps: {
            loading: false,
        },
    },
    PagerView: {
        defaultProps: {
            initialPage: 0,
            gap: 10,
        },
    },
    ScrollView: {
        defaultProps: {
            loading: false,
        },
    },
    Typography: {
        defaultProps: {},
    },
    Backdrop: {
        defaultProps: {
            closable: false,
            defaultOpen: true,
            closeOnBackdropTap: true,
            swipeable: true,
            swipeDirection: "down",
            swipeThreshold: 100,
            propagateSwipe: true,
        },
    },
    CenteredLoader: {
        defaultProps: {},
    },
    Dialog: {
        defaultProps: {},
    },
    Modal: {
        defaultProps: {
            closable: true,
            showCloseButton: true,
            defaultOpen: true,
            elevation: 16,
        },
    },
    Skeleton: {
        defaultProps: {
            shape: "stadium",
            loading: true,
        },
    },
    Suspense: {
        defaultProps: {},
    },
    Toast: {
        defaultProps: {
            position: "top",
            animation: "fadingSlide",
            duration: 4000,
        },
    },
    Button: {
        defaultProps: {
            type: "button",
            loading: false,
            size: "md",
            fullWidth: false,
            disabled: false,
            variant: "filled",
        },
    },
    Form: {
        defaultProps: {},
    },
    FormControl: {
        defaultProps: {},
    },
    FormControlError: {
        defaultProps: {},
    },
    FormControlHint: {
        defaultProps: {},
    },
    FormControlLabel: {
        defaultProps: {},
    },
    IconButton: {
        defaultProps: {
            loading: false,
            disabled: false,
        },
    },
    NumericInput: {
        defaultProps: {},
        maxDecimals: 4,
    },
    PressableText: {
        defaultProps: {
            disabled: false,
        },
    },
    QrScanner: {
        defaultProps: {},
    },
    Select: {
        defaultProps: {
            multiple: false,
            icon: <ChevronDownIcon />,
            autoFocus: false,
            disabled: false,
            readonly: false,
            LabelProps: {},
            Label: FormControlLabel,
        },
    },
    SelectItem: {
        defaultProps: {},
    },
    SelectMenu: {
        defaultProps: {},
    },
    TextInput: {
        defaultProps: {
            disabled: false,
            readonly: false,
            clearable: false,
            secureTextEntry: false,
            Label: FormControlLabel,
        },
    },
    TextArea: {
        defaultProps: {
            numberOfLines: 4,
        },
    },
    TextField: {
        defaultProps: {},
    },
    Col: {
        defaultProps: {},
    },
    Row: {
        defaultProps: {},
    },
    StatusBar: {
        defaultProps: {},
    },
    Toolbar: {
        defaultProps: {},
        height: 56,
    },
    DottedPagination: {
        defaultProps: {},
    },
    Tabs: {
        defaultProps: {
            initialIndex: 0,
            gap: 20,
        },
    },
    Tab: {
        defaultProps: {},
    },
    TabGroup: {
        defaultProps: {
            renderIndicator: true,
        },
    },
    TabPanel: {
        defaultProps: {},
    },
    Paper: {
        defaultProps: {
            elevation: 1,
            square: false,
        },
    },
    AnimatedFade: {
        defaultProps: {
            duration: 500,
            delay: 0,
            unmountOnExit: false,
            appear: false,
        },
    },
    AnimatedFadingScale: {
        defaultProps: {
            duration: 500,
            delay: 0,
            unmountOnExit: false,
            appear: false,
        },
    },
    AnimatedFadingSlide: {
        defaultProps: {
            duration: 500,
            delay: 0,
            unmountOnExit: false,
            appear: false,
        },
    },
    AnimatedScale: {
        defaultProps: {
            duration: 500,
            delay: 0,
            unmountOnExit: false,
            appear: false,
        },
    },
    AnimatedSlide: {
        defaultProps: {
            duration: 500,
            delay: 0,
            appear: false,
        },
    },
    BlockchainAddress: {
        defaultProps: {},
        blockchainLinks: {
            address: "https://etherscan.io/address/",
            tx: "https://etherscan.io/tx/",
        },
    },
    CopyButton: {
        defaultProps: {},
    },
    ElementStyler: {
        defaultProps: {},
    },
};

export default componentsConfig;
