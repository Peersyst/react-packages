import { ComponentsConfig } from "@peersyst/react-components-core";
import { Animated } from "../Animated";
import {
    CheckedBoxIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    RadioCheckedIcon,
    RadioUncheckedIcon,
    UncheckedBoxIcon,
} from "../assets/icons";
import { Label } from "../Label";
import { FormControlLabel } from "../FormControlLabel";
import Color from "color";
import { Button } from "../Button";

const componentsConfig: ComponentsConfig = {
    Alert: {
        defaultProps: {
            elevation: 0,
        },
    },
    Animated: {
        defaultProps: {
            appear: true,
            in: true,
            hideOnExit: true,
            duration: 500,
            delay: 0,
            mountOnEnter: false,
            unmountOnExit: false,
        },
    },
    AnimatedCollapse: {
        defaultProps: {
            orientation: "vertical",
            collapsedSize: "0px",
            duration: 300,
        },
    },
    AnimatedFade: {
        defaultProps: {},
    },
    AnimatedFadingScale: {
        defaultProps: {},
    },
    AnimatedFadingSlide: {
        defaultProps: {},
    },
    AnimatedScale: {
        defaultProps: {},
    },
    AnimatedSlide: {
        defaultProps: {
            duration: 500,
        },
    },
    AppBar: {
        defaultProps: {
            position: "static",
            elevation: 8,
            onScrollElevationThreshold: 0,
            hideOnScrollThreshold: 100,
        },
    },
    Backdrop: {
        defaultProps: {
            preventScroll: true,
            closable: true,
            defaultOpen: true,
            childrenAnimation: {
                AnimatedComponent: Animated.Fade,
                props: { duration: 300 },
            },
            transparent: false,
            transitionsDuration: 400,
            renderBackdrop: true,
            renderAtRoot: false,
        },
    },
    BackgroundImage: {
        defaultProps: {},
    },
    Badge: {
        defaultProps: {
            max: 99,
            invisible: false,
            overlap: "rectangular",
            showZero: false,
        },
    },
    BlockchainAddress: {
        defaultProps: {},
        blockchainLinks: {
            address: "https://etherscan.io/address/",
            tx: "https://etherscan.io/tx/",
            token: "https://etherscan.io/token/",
            nft: "https://etherscan.io/token/",
        },
    },
    Button: {
        defaultProps: {
            variant: "filled",
            size: "md",
            fullWidth: false,
            type: "button",
        },
    },
    Carousel: {
        defaultProps: {
            gap: 20,
            autoplay: false,
            autoplayInterval: 3000,
            rightArrow: <ChevronRightIcon />,
            leftArrow: <ChevronLeftIcon />,
        },
    },
    Chart: {
        defaultProps: {},
    },
    Checkbox: {
        defaultProps: {
            defaultValue: false,
            icon: <UncheckedBoxIcon />,
            checkedIcon: <CheckedBoxIcon />,
            disabled: false,
            LabelProps: {},
            hideError: true,
            Label: Label,
        },
    },
    Chip: {
        defaultProps: {
            disabled: false,
            size: "md",
            variant: "filled",
            rounded: false,
        },
    },
    Col: {
        defaultProps: {},
    },
    ColorInput: {
        defaultProps: {
            defaultValue: new Color(),
            showTextField: true,
            LabelProps: {},
            Label: FormControlLabel,
        },
    },
    CopyButton: {
        defaultProps: {},
    },
    Dialog: {
        defaultProps: {
            size: "sm",
        },
        actions: {
            variant: "text",
            component: Button,
        },
    },
    Divider: {
        defaultProps: {
            size: "1px",
            width: "full-width",
        },
    },
    Drawer: {
        defaultProps: {
            variant: "temporary",
            defaultOpen: true,
            elevation: 16,
            position: "left",
            transitionsDuration: 300,
            size: {
                size: "300px",
            },
        },
    },
    Expandable: {
        defaultProps: {},
    },
    ExpandableDisplay: {
        defaultProps: {},
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
    Hash: {
        defaultProps: {
            length: "auto",
            break: false,
            gap: 5,
        },
    },
    IconButton: {
        defaultProps: {
            disabled: false,
            type: "button",
        },
    },
    Image: {
        defaultProps: {},
    },
    InfiniteScroll: {
        defaultProps: {
            observerOffset: "10vh",
        },
    },
    Label: {
        defaultProps: {
            placement: "top",
            alignment: "start",
            gap: 10,
        },
    },
    MiniDrawer: {
        defaultProps: {
            position: "left",
            collapsedSize: 70,
            size: {
                size: 300,
            },
            transitionDuration: "300ms",
        },
    },
    Modal: {
        defaultProps: {
            closable: true,
            defaultOpen: true,
            transitionsDuration: 300,
            animation: "fade",
            elevation: 16,
            preventScroll: true,
        },
    },
    OnScreenObserver: {
        defaultProps: {
            offset: "0",
        },
    },
    Pagination: {
        defaultProps: {
            defaultPage: 1,
            boundaryCount: 1,
            previousIcon: <ChevronLeftIcon />,
            nextIcon: <ChevronRightIcon />,
            startIcon: false,
            endIcon: false,
            size: "md",
        },
    },
    PaginationItem: {
        defaultProps: {
            disabled: false,
            size: "md",
        },
    },
    Paper: {
        defaultProps: {
            elevation: 1,
            square: false,
        },
    },
    Popover: {
        defaultProps: {
            showOn: "hover",
            position: "bottom",
            offsetX: 0,
            animation: {
                AnimatedComponent: Animated.Fade,
                props: { duration: 200 },
            },
            disablePortal: false,
        },
    },
    ProgressBar: {
        defaultProps: {},
    },
    RadioButton: {
        defaultProps: {
            defaultValue: false,
            icon: <RadioUncheckedIcon />,
            checkedIcon: <RadioCheckedIcon />,
            disabled: false,
            LabelProps: {},
            hideError: true,
            Label: Label,
        },
    },
    RangeSlider: {
        defaultProps: {
            step: 1,
            disabled: false,
            LabelProps: {},
            Label: FormControlLabel,
        },
    },
    Row: {
        defaultProps: {},
    },
    Select: {
        defaultProps: {},
    },
    SelectGroup: {
        defaultProps: {},
    },
    SelectItem: {
        defaultProps: {},
    },
    SelectMenu: {
        defaultProps: {},
    },
    Selector: {
        defaultProps: {},
    },
    Skeleton: {
        defaultProps: {
            shape: "stadium",
            loading: true,
            animation: "wave",
        },
    },
    Slider: {
        defaultProps: {
            step: 1,
            disabled: false,
            LabelProps: {},
            Label: FormControlLabel,
        },
    },
    Switch: {
        defaultProps: {
            defaultValue: false,
            disabled: false,
            LabelProps: {},
            hideError: true,
            Label: Label,
        },
    },
    Table: {
        defaultProps: {
            rowHeight: "52px",
            headerHeight: "56px",
            borders: {
                outline: true,
                horizontal: true,
                vertical: true,
            },
        },
    },
    Tabs: {
        defaultProps: {
            initialIndex: 0,
        },
    },
    Tab: {
        defaultProps: {},
    },
    TabGroup: {
        defaultProps: {
            renderIndicator: true,
            leftArrowIcon: <ChevronLeftIcon />,
            rightArrowIcon: <ChevronRightIcon />,
        },
    },
    TabPanel: {
        defaultProps: {},
    },
    TextArea: {
        defaultProps: {},
    },
    TextField: {
        defaultProps: {},
    },
    TextInput: {
        defaultProps: {
            defaultValue: "",
            disabled: false,
            readonly: false,
            LabelProps: {},
            Label: FormControlLabel,
        },
    },
    Toast: {
        defaultProps: {
            position: "top-right",
            animation: "fadingSlide",
            duration: 4000,
            elevation: 1,
        },
    },
    ToggleButton: {
        defaultProps: {
            defaultSelected: false,
        },
    },
    Toolbar: {
        defaultProps: {},
    },
    Typography: {
        defaultProps: {},
    },
    Upload: {
        defaultProps: {
            readonly: false,
            disabled: false,
            LabelProps: {},
            Label: FormControlLabel,
        },
    },
};

export default componentsConfig;
