# Versions

### BREAKING

## 2.1.0

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

## 0.0.9

### BREAKING

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
