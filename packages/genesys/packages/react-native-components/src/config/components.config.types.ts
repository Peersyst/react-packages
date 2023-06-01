/* eslint-disable @typescript-eslint/no-empty-interface */
import {
    ComponentConfig,
    ExtendedCoreBlockchainAddressConfig,
    ExtendedCoreDialogConfig,
} from "@peersyst/react-components-core";
import { DividerProps } from "../display/Divider";
import { IconProps } from "../display/Icon";
import { ImageProps } from "../display/Image";
import { LabelProps } from "../display/Label";
import { ListProps } from "../display/List";
import { PagerViewProps } from "../display/PagerView";
import { ScrollViewProps } from "../display/ScrollView";
import { TypographyProps } from "../display/Typography";
import { DialogProps } from "../feedback/Dialog";
import { CenteredLoaderProps } from "../feedback/CenteredLoader";
import { ModalProps } from "../feedback/Modal";
import { SkeletonProps } from "../feedback/Skeleton";
import { SuspenseProps } from "../feedback/Suspense";
import { BackdropProps } from "../feedback/Backdrop";
import { ToastProps } from "../feedback/Toast";
import { ButtonProps } from "../input/Button";
import { FormProps } from "../input/Form";
import { FormControlProps } from "../input/FormControl";
import { FormControlErrorProps } from "../input/FormControlError";
import { FormControlHintProps } from "../input/FormControlHint";
import { FormControlLabelProps } from "../input/FormControlLabel";
import { IconButtonProps } from "../input/IconButton";
import { PressableTextProps } from "../input/PressableText";
import { QrScannerProps } from "../input/QrScanner";
import { SelectItemProps, SelectMenuProps, SelectProps } from "../input/Select";
import { TextAreaProps, TextFieldProps, TextInputProps } from "../input/TextInput";
import { ColProps } from "../layout/Col";
import { RowProps } from "../layout/Row";
import { StatusBarProps } from "../layout/StatusBar";
import { DottedPaginationProps } from "../navigation/DottedPagination";
import { TabGroupProps, TabPanelProps, TabProps, TabsProps } from "../navigation/Tabs";
import { PaperProps } from "../surface/Paper";
import { AnimatedProps } from "../util/Animated";
import { SlideProps } from "../util/Animated/Slide";
import { CopyButtonProps } from "../util/CopyButton/CopyButton.types";
import { ElementStylerProps } from "../util/ElementStyler";
import { BlockchainAddressProps } from "../util/BlockchainAddress";
import { AlertProps } from "../feedback/Alert";
import { SpinnerProps } from "../feedback/Spinner";
import { SwitchProps } from "../input/Switch";
import { RadioButtonProps } from "../input/RadioButton";
import { SelectorProps } from "../input/SelectorGroup";
import { SelectorGroupProps } from "../input/SelectorGroup/SelectorGroup.types";
import { SectionListProps } from "../display/SectionList";
import { SwipeButtonProps } from "../input/SwipeButton/SwipeButton.types";
import { GradientViewProps } from "../layout/GradientView";
import { ContainedSuspenseProps } from "../feedback/ContainedSuspense";
import { HashProps } from "../util/Hash";
import { CodeFieldProps } from "../input/CodeField";
import { ChipProps } from "../display/Chip";
import {
    ExpandableProps,
    ExpandableDisplayProps,
    ExpandableContentProps,
} from "../display/Expandable";
import { FlashListProps } from "../display/FlashList/FlashList.types";

/**
 * ExtendedToolbarConfig
 */
export type ExtendedToolbarConfig = ComponentConfig<{}> & {
    height: number;
};

export interface AlertConfig extends ComponentConfig<AlertProps> {}
export interface DividerConfig extends ComponentConfig<DividerProps> {}
export interface IconConfig extends ComponentConfig<IconProps> {}
export interface ImageConfig extends ComponentConfig<ImageProps> {}
export interface LabelConfig extends ComponentConfig<LabelProps> {}
export interface ListConfig extends ComponentConfig<ListProps> {}
export interface FlatListConfig extends ComponentConfig<FlashListProps> {}
export interface PagerViewConfig extends ComponentConfig<PagerViewProps> {}
export interface ScrollViewConfig extends ComponentConfig<ScrollViewProps> {}
export interface TypographyConfig extends ComponentConfig<TypographyProps> {}
export interface BackdropConfig extends ComponentConfig<BackdropProps> {}
export interface CenteredLoaderConfig extends ComponentConfig<CenteredLoaderProps> {}
export interface DialogConfig extends ComponentConfig<DialogProps> {}
export interface ModalConfig extends ComponentConfig<ModalProps> {}
export interface SkeletonConfig extends ComponentConfig<SkeletonProps> {}
export interface SuspenseConfig extends ComponentConfig<SuspenseProps> {}
export interface ToastConfig extends ComponentConfig<ToastProps> {}
export interface ButtonConfig extends ComponentConfig<ButtonProps> {}
export interface FormConfig extends ComponentConfig<FormProps> {}
export interface FormControlConfig extends ComponentConfig<FormControlProps> {}
export interface FormControlErrorConfig extends ComponentConfig<FormControlErrorProps> {}
export interface FormControlHintConfig extends ComponentConfig<FormControlHintProps> {}
export interface FormControlLabelConfig extends ComponentConfig<FormControlLabelProps> {}
export interface IconButtonConfig extends ComponentConfig<IconButtonProps> {}
export interface PressableTextConfig extends ComponentConfig<PressableTextProps> {}
export interface QrScannerConfig extends ComponentConfig<QrScannerProps> {}
export interface SelectConfig extends ComponentConfig<SelectProps<any>> {}
export interface SelectItemConfig extends ComponentConfig<SelectItemProps<any>> {}
export interface SelectMenuConfig extends ComponentConfig<SelectMenuProps> {}
export interface TextInputConfig extends ComponentConfig<TextInputProps> {}
export interface TextAreaConfig extends ComponentConfig<TextAreaProps> {}
export interface TextFieldConfig extends ComponentConfig<TextFieldProps> {}
export interface ColConfig extends ComponentConfig<ColProps> {}
export interface RowConfig extends ComponentConfig<RowProps> {}
export interface SectionListConfig extends ComponentConfig<SectionListProps> {}
export interface StatusBarConfig extends ComponentConfig<StatusBarProps> {}
export interface ToolbarConfig extends ExtendedToolbarConfig {}
export interface DottedPaginationConfig extends ComponentConfig<DottedPaginationProps> {}
export interface TabsConfig extends ComponentConfig<TabsProps> {}
export interface TabConfig extends ComponentConfig<TabProps> {}
export interface TabGroupConfig extends ComponentConfig<TabGroupProps> {}
export interface TabPanelConfig extends ComponentConfig<TabPanelProps> {}
export interface PaperConfig extends ComponentConfig<PaperProps> {}
export interface AnimatedFadeConfig extends ComponentConfig<AnimatedProps> {}
export interface AnimatedFadingScaleConfig extends ComponentConfig<AnimatedProps> {}
export interface AnimatedFadingSlideConfig extends ComponentConfig<SlideProps> {}
export interface AnimatedScaleConfig extends ComponentConfig<AnimatedProps> {}
export interface AnimatedSlideConfig extends ComponentConfig<SlideProps> {}
export interface BlockchainAddressConfig
    extends ExtendedCoreBlockchainAddressConfig<BlockchainAddressProps> {}
export interface CopyButtonConfig extends ComponentConfig<CopyButtonProps> {}
export interface ElementStylerConfig extends ComponentConfig<ElementStylerProps> {}
export interface HashConfig extends ComponentConfig<HashProps> {}
export interface SpinnerConfig extends ComponentConfig<SpinnerProps> {}
export interface SwitchConfig extends ComponentConfig<SwitchProps> {}
export interface RadioButtonConfig extends ComponentConfig<RadioButtonProps> {}
export interface SelectorConfig extends ComponentConfig<SelectorProps<any>> {}
export interface SelectorGroupConfig extends ComponentConfig<SelectorGroupProps<any>> {}
export interface SwipeButtonConfig extends ComponentConfig<SwipeButtonProps> {}
export interface GradientViewConfig extends ComponentConfig<GradientViewProps> {}
export interface ContainedSuspenseConfig extends ComponentConfig<ContainedSuspenseProps> {}
export interface CodeFieldConfig extends ComponentConfig<CodeFieldProps> {}
export interface ChipConfig extends ComponentConfig<ChipProps> {}
export interface ExpandableConfig extends ComponentConfig<ExpandableProps> {}
export interface ExpandableDisplayConfig extends ComponentConfig<ExpandableDisplayProps> {}
export interface ExpandableContentConfig extends ComponentConfig<ExpandableContentProps> {}

export interface ComponentsConfig {
    Alert: AlertConfig;
    Divider: DividerConfig;
    Icon: IconConfig;
    Image: ImageConfig;
    Label: LabelConfig;
    List: ListConfig;
    FlatList: FlatListConfig;
    PagerView: PagerViewConfig;
    ScrollView: ScrollViewConfig;
    Typography: TypographyConfig;
    Backdrop: BackdropConfig;
    CenteredLoader: CenteredLoaderConfig;
    Dialog: ExtendedCoreDialogConfig<DialogProps, ButtonProps>;
    Modal: ModalConfig;
    Skeleton: SkeletonConfig;
    Suspense: SuspenseConfig;
    Toast: ToastConfig;
    Button: ButtonConfig;
    Form: FormConfig;
    FormControl: FormControlConfig;
    FormControlError: FormControlErrorConfig;
    FormControlHint: FormControlHintConfig;
    FormControlLabel: FormControlLabelConfig;
    IconButton: IconButtonConfig;
    PressableText: PressableTextConfig;
    QrScanner: QrScannerConfig;
    Select: SelectConfig;
    SelectItem: SelectItemConfig;
    SelectMenu: SelectMenuConfig;
    TextInput: TextInputConfig;
    TextArea: TextAreaConfig;
    TextField: TextFieldConfig;
    Col: ColConfig;
    Row: RowConfig;
    SectionList: SectionListConfig;
    StatusBar: StatusBarConfig;
    Toolbar: ToolbarConfig;
    DottedPagination: DottedPaginationConfig;
    Tabs: TabsConfig;
    Tab: TabConfig;
    TabGroup: TabGroupConfig;
    TabPanel: TabPanelConfig;
    Paper: PaperConfig;
    AnimatedFade: AnimatedFadeConfig;
    AnimatedFadingScale: AnimatedFadingScaleConfig;
    AnimatedFadingSlide: AnimatedFadingSlideConfig;
    AnimatedScale: AnimatedScaleConfig;
    AnimatedSlide: AnimatedSlideConfig;
    BlockchainAddress: BlockchainAddressConfig;
    CopyButton: CopyButtonConfig;
    ElementStyler: ElementStylerConfig;
    Spinner: SpinnerConfig;
    Switch: SwitchConfig;
    RadioButton: RadioButtonConfig;
    Selector: SelectorConfig;
    SelectorGroup: SelectorGroupConfig;
    SwipeButton: SwipeButtonConfig;
    GradientView: GradientViewConfig;
    ContainedSuspense: ContainedSuspenseConfig;
    Hash: HashConfig;
    CodeField: CodeFieldConfig;
    Chip: ChipConfig;
    Expandable: ExpandableConfig;
    ExpandableDisplay: ExpandableDisplayConfig;
    ExpandableContent: ExpandableContentConfig;
}
