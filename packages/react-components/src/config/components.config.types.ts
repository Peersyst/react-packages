/* eslint-disable @typescript-eslint/no-empty-interface */
import {
    ExtendedCoreBlockchainAddressConfig,
    ComponentConfig,
} from "@peersyst/react-components-core";
import {
    AnimatedProps,
    CollapseProps,
    AnimatedComponentProps,
    FadingSlideProps,
    ScaleProps,
    SlideProps,
} from "../Animated";
import { AppBarProps } from "../AppBar";
import { BackdropProps } from "../Backdrop";
import { BackgroundImageProps } from "../BackgroundImage";
import { BadgeProps } from "../Badge";
import { ButtonProps } from "../Button";
import { CarouselProps } from "../Carousel";
import { ChartProps } from "../Chart";
import { CheckboxProps } from "../Checkbox";
import { ColProps } from "../Col";
import { CopyButtonProps } from "../CopyButton";
import { DividerProps } from "../Divider";
import { DrawerProps } from "../Drawer";
import { ExpandableDisplayProps, ExpandableProps } from "../Expandable";
import { FormProps } from "../Form";
import { FormControlProps } from "../FormControl";
import { FormControlErrorProps } from "../FormControlError";
import { FormControlHintProps } from "../FormControlHint";
import { HashProps } from "../Hash";
import { IconButtonProps } from "../IconButton";
import { ImageProps } from "../Image";
import { InfiniteScrollProps } from "../InfiniteScroll";
import { LabelProps } from "../Label";
import { MiniDrawerProps } from "../MiniDrawer";
import { ModalProps } from "../Modal";
import { OnScreenObserverProps } from "../OnScreenObserver";
import { PaginationItemProps, PaginationProps } from "../Pagination";
import { PaperProps } from "../Paper";
import { PopoverProps } from "../Popover";
import { ProgressBarProps } from "../ProgressBar";
import { RadioButtonProps } from "../RadioButton";
import { RangeSliderProps } from "../RangeSlider";
import { RowProps } from "../Row";
import { SelectItemProps, SelectMenuProps, SelectProps } from "../Select";
import { SkeletonProps } from "../Skeleton";
import { SliderProps } from "../Slider";
import { SwitchProps } from "../Switch";
import { TableProps } from "../Table";
import { TabGroupProps, TabPanelProps, TabProps, TabsProps } from "../Tabs";
import { TextAreaProps } from "../TextArea";
import { TextFieldProps } from "../TextField";
import { TextInputProps } from "../TextInput/TextInput.types";
import { ToastProps } from "../Toast";
import { ToggleButtonProps } from "../ToggleButton";
import { TypographyProps } from "../Typography";
import { UploadProps } from "../Upload";
import { BlockchainAddressProps } from "../BlockchainAddress";

/**
 * No config for:
 * - ClickAwayListener
 * - ErrorBoundary
 * - InfiniteCarousel
 * - Loader
 * - ModalProvider
 * - Player
 * - SvgIcon
 * - ToastProvider
 * - Grid (Needs Function Component refactor)
 * - IrregularGrid (Needs Function Component refactor)
 */
export interface AnimatedConfig extends ComponentConfig<AnimatedProps> {}
export interface AnimatedCollapseConfig extends ComponentConfig<CollapseProps> {}
export interface AnimatedFadeConfig extends ComponentConfig<AnimatedComponentProps> {}
export interface AnimatedFadingScaleConfig extends ComponentConfig<AnimatedComponentProps> {}
export interface AnimatedFadingSlideConfig extends ComponentConfig<FadingSlideProps> {}
export interface AnimatedScaleConfig extends ComponentConfig<ScaleProps> {}
export interface AnimatedSlideConfig extends ComponentConfig<SlideProps> {}
export interface AppBarConfig extends ComponentConfig<AppBarProps> {}
export interface BackdropConfig extends ComponentConfig<BackdropProps> {}
export interface BackgroundImageConfig extends ComponentConfig<BackgroundImageProps> {}
export interface BadgeConfig extends ComponentConfig<BadgeProps> {}
export interface BlockchainAddressConfig
    extends ExtendedCoreBlockchainAddressConfig<BlockchainAddressProps> {}
export interface ButtonConfig extends ComponentConfig<ButtonProps> {}
export interface CarouselConfig extends ComponentConfig<CarouselProps> {}
export interface ChartConfig extends ComponentConfig<ChartProps> {}
export interface CheckboxConfig extends ComponentConfig<CheckboxProps> {}
export interface ColConfig extends ComponentConfig<ColProps> {}
export interface CopyButtonConfig extends ComponentConfig<CopyButtonProps> {}
export interface DividerConfig extends ComponentConfig<DividerProps> {}
export interface DrawerConfig extends ComponentConfig<DrawerProps> {}
export interface ExpandableConfig extends ComponentConfig<ExpandableProps> {}
export interface ExpandableDisplayConfig extends ComponentConfig<ExpandableDisplayProps> {}
export interface FormConfig extends ComponentConfig<FormProps> {}
export interface FormControlConfig extends ComponentConfig<FormControlProps> {}
export interface FormControlErrorConfig extends ComponentConfig<FormControlErrorProps> {}
export interface FormControlHintConfig extends ComponentConfig<FormControlHintProps> {}
export interface FormControlLabelConfig extends ComponentConfig<LabelProps> {}
export interface HashConfig extends ComponentConfig<HashProps> {}
export interface IconButtonConfig extends ComponentConfig<IconButtonProps> {}
export interface ImageConfig extends ComponentConfig<ImageProps> {}
export interface InfiniteScrollConfig extends ComponentConfig<InfiniteScrollProps> {}
export interface LabelConfig extends ComponentConfig<LabelProps> {}
export interface MiniDrawerConfig extends ComponentConfig<MiniDrawerProps> {}
export interface ModalConfig extends ComponentConfig<ModalProps> {}
export interface OnScreenObserverConfig extends ComponentConfig<OnScreenObserverProps> {}
export interface PaginationConfig extends ComponentConfig<PaginationProps> {}
export interface PaginationItemConfig extends ComponentConfig<PaginationItemProps> {}
export interface PaperConfig extends ComponentConfig<PaperProps> {}
export interface PopoverConfig extends ComponentConfig<PopoverProps> {}
export interface ProgressBarConfig extends ComponentConfig<ProgressBarProps> {}
export interface RadioButtonConfig extends ComponentConfig<RadioButtonProps> {}
export interface RangeSliderConfig extends ComponentConfig<RangeSliderProps> {}
export interface RowConfig extends ComponentConfig<RowProps> {}
export interface SelectConfig extends ComponentConfig<SelectProps<any>> {}
export interface SelectItemConfig extends ComponentConfig<SelectItemProps<any>> {}
export interface SelectMenuConfig extends ComponentConfig<SelectMenuProps> {}
export interface SkeletonConfig extends ComponentConfig<SkeletonProps> {}
export interface SliderConfig extends ComponentConfig<SliderProps> {}
export interface SwitchConfig extends ComponentConfig<SwitchProps> {}
export interface TableConfig extends ComponentConfig<TableProps<any>> {}
export interface TabsConfig extends ComponentConfig<TabsProps> {}
export interface TabConfig extends ComponentConfig<TabProps> {}
export interface TabGroupConfig extends ComponentConfig<TabGroupProps> {}
export interface TabPanelConfig extends ComponentConfig<TabPanelProps> {}
export interface TextAreaConfig extends ComponentConfig<TextAreaProps> {}
export interface TextFieldConfig extends ComponentConfig<TextFieldProps> {}
export interface TextInputConfig extends ComponentConfig<TextInputProps> {}
export interface ToastConfig extends ComponentConfig<ToastProps> {}
export interface ToggleButtonConfig extends ComponentConfig<ToggleButtonProps> {}
export interface ToolbarConfig extends ComponentConfig<ToolbarConfig> {}
export interface TypographyConfig extends ComponentConfig<TypographyProps> {}
export interface UploadConfig extends ComponentConfig<UploadProps> {}

export interface ComponentsConfig {
    Animated: AnimatedConfig;
    AnimatedCollapse: AnimatedCollapseConfig;
    AnimatedFade: AnimatedFadeConfig;
    AnimatedFadingScale: AnimatedFadingScaleConfig;
    AnimatedFadingSlide: AnimatedFadingSlideConfig;
    AnimatedScale: AnimatedScaleConfig;
    AnimatedSlide: AnimatedSlideConfig;
    AppBar: AppBarConfig;
    Backdrop: BackdropConfig;
    BackgroundImage: BackgroundImageConfig;
    Badge: BadgeConfig;
    BlockchainAddress: BlockchainAddressConfig;
    Button: ButtonConfig;
    Carousel: CarouselConfig;
    Chart: ChartConfig;
    Checkbox: CheckboxConfig;
    Col: ColConfig;
    CopyButton: CopyButtonConfig;
    Divider: DividerConfig;
    Drawer: DrawerConfig;
    Expandable: ExpandableConfig;
    ExpandableDisplay: ExpandableDisplayConfig;
    Form: FormConfig;
    FormControl: FormControlConfig;
    FormControlError: FormControlErrorConfig;
    FormControlHint: FormControlHintConfig;
    FormControlLabel: FormControlLabelConfig;
    Hash: HashConfig;
    IconButton: IconButtonConfig;
    Image: ImageConfig;
    InfiniteScroll: InfiniteScrollConfig;
    Label: LabelConfig;
    MiniDrawer: MiniDrawerConfig;
    Modal: ModalConfig;
    OnScreenObserver: OnScreenObserverConfig;
    Pagination: PaginationConfig;
    PaginationItem: PaginationItemConfig;
    Paper: PaperConfig;
    Popover: PopoverConfig;
    ProgressBar: ProgressBarConfig;
    RadioButton: RadioButtonConfig;
    RangeSlider: RangeSliderConfig;
    Row: RowConfig;
    Select: SelectConfig;
    SelectItem: SelectItemConfig;
    SelectMenu: SelectMenuConfig;
    Skeleton: SkeletonConfig;
    Slider: SliderConfig;
    Switch: SwitchConfig;
    Table: TableConfig;
    Tabs: TabsConfig;
    Tab: TabConfig;
    TabGroup: TabGroupConfig;
    TabPanel: TabPanelConfig;
    TextArea: TextAreaConfig;
    TextField: TextFieldConfig;
    TextInput: TextInputConfig;
    Toast: ToastConfig;
    ToggleButton: ToggleButtonConfig;
    Toolbar: ToolbarConfig;
    Typography: TypographyConfig;
    Upload: UploadConfig;
}
