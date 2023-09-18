# Versions

## 3.0.2

[Select] refactor: get the open, onClose, onOpen props from the core.
[Package.json] Update `react-components-core`

## 3.0.0-alpha.19

[CopyButton] fix: CopyButton now uses CopyIcon from theme

## 2.5.0 **BREAKING**

[Hash] Refactor hash to work with actions: `share`, `copy`, `link`, `customAction`
[BlockchainAddress] Refactor to work with new Hash component
[useShare] Add hook to manage the share
[useCopyToClipboard] Add hook to manage the copy to clipboard

## 2.4.3

[NumericInput] Fix useNumericInput

## 2.4.0 **BREAING**

[TextInput] Remove input and inputProps props
[TextInput] Add format prop that can be used to format the input value

## 2.3.0 **BREAING**

[Selector] Refactor of selector. `type` prop now is `controller`. Enable custom render function
[SelectorGroup] SelectorGroup update `type` prop now is `controller`. Enable custom render function

## 2.2.11

[TextInput] Update caret-color based on textfield validity status

## 2.2.0

[GradientView] Add GradientView layout component
[ContainedSuspense] Add ContainedSuspense feedback component
[Button] Refactor Button to use ContainedSuspense
[SwipeButton] Add SwipeButton input component

## 2.1.21

[fix] Imports

## 2.1.20

[Button] Rollback button styles

## 2.1.19

[fix] Imports

## 2.1.18

[package.json] Update react-utils
[Button] Refactor styles
[useMergeStyles] Add generic hook to merge styles with priorities

## 2.1.17

[package.json] Update react-components-core (SelectItem non blocking updates)

## 2.1.16

[Modal] Add global styles

## 2.1.15

[Package.json] Update react-components-core (coreTheme)

## 2.1.14

[SectionList] Fixed SectionListProps
[List] Fixed ListProps

## 2.1.13

[SectionList] Created new component SectionList

## 2.1.12

[Dialog] Add global styles

## 2.1.11

[Dialog] Add buttons props

## 2.1.10

[Button] Fix color prop styles

## 2.1.9

[Button] Add color prop
[Dialog] Add button actions
[Dialog] Add buttons layout prop

## 2.1.8

[Button] Add LinearGradient root to allow gradient buttons

## 2.1.7

[Package.json] Update `react-components-core`

## 2.1.6

[NumericInput] Update useNumericInput
[Package.json] Update `react-components-core`

## 2.1.5

[Button] Fix children render based on type

## 2.1.4

[useColorStyle] Add hook that returns `{ color: string } | {}` depending on the color value
[Typography] Add color prop
[Label] Add color prop

## 2.1.3

[Backdrop] Fix children setClose function to use Backdrop handlers

## 2.1.2

[Alert] Add global styles
[Toast] Add global styles

## 2.1.1

Updated react-components-core

## 2.1.0 **BREAING**

[Alert] Change message prop to content + Content (text) styles
[Toast] Change message prop to content because Toast uses Alert

## 2.0.31

[NumericInput] Remove numeric input config

## 2.0.28

[Dialog] Extract some logic to @react-components-core

## 2.0.26

[NumericInput] Fix useNumericInput
[Packege.json] Update react-components-core
[Config] Remove max decimals from the config

## 2.0.25

[NumericInput] Fix numeric input

## 2.0.24

[NumericInput] Make NumericInput reactive to the locale
[Packege.json] Update react-components-core
[Config] Add locale to the config

## 2.0.23

[Image] fix image props

## 2.0.22

[Row] Fix row when style is undefined
[Switch] Fix alignItems center in the InnerSwitch component

## 2.0.21

[Row] Fix row styles

## 2.0.19

Fix imports

## 2.0.18

[SelectorGroup] Pass style to InnerSelectorGroup

## 2.0.17

[Package.json] Update react-components-core

## 2.0.16

[SelectorGroup] Add SelectorGroup component

## 2.0.15

[Switch] Export component + refactor styles
[RadioButton] New component

## 2.0.14

[TextInput] Pass error prop to component

## 2.0.11

[CopyButton] Fix copy to clipboard setString deprecated. Now use setStringAsync (only async on web)
[BlockchainAddress] Enable not displaying the copy button

## 2.0.2

[Select] Add testID to select display touchable

## 1.4.27

[useSetTheme] Export it from core

## 1.4.26

[BlockchainLinks] Add Nfts & Tokens to BlockchainAddress

## 1.4.16

-   Update react-components-core
-   Add numberOfLines to the Label component

## 1.2.48

-   Add Switch component

## 1.2.41

-   Add ThemeOverrideContext

## 1.2.40

-   Improve QrScanner

## 1.2.39

-   Fix select display not occupying full width

## 1.2.24

-   Add GlobalStyles to Divider

## 0.0.9 **BREAING**

Theme is now a part of config and ConfigProvider must be provided instead of just the ThemeProvider

[config] Config refactor

## 0.0.8

-   All inputs components now use FormControl as its core and have a common behaviour
-   Extracted common theme code to react-components core
-   Extracted common input code to react-components-core

[FormControl] Add FormControl

## 0.0.7

Update BlockchainAddress to use react-utils 1.4.4

## 0.0.6

Dependencies update

## 0.0.5

[createModal] Rename `closeModal` to `close`

## 0.0.4

[createModal] Now uses a higher order component that grants the `id` of the modal that is being created and a `closeModal` function to be able to close it from inside

## 0.0.3

ModalProvider patch fixing useModal types

## 0.0.2

[Backdrop] hideBackdrop from useBackdrop hook accepts a Backdrop, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

[Modal] hideModal from useModal hook accepts a Modal, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

[Drawer] hideDrawer from useDrawer hook accepts a Drawer, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

-   hide(Backdrop|Modal|Drawer) without an argument, will close the last components of its type in a future update. For now, **the last opened Backdrop based component will be closed when used without an argument**.
