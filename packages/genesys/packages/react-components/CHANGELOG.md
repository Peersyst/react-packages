# Versions

## 3.9.16

[package.json] Update `react-components-core`

## 3.9.11

[Select] Add open prop to controll the visibility of the select
[Package.json] Update `react-components-core`

## 3.8.0

[Typography] Add `numberOfLines` prop to `Typography`. It works in a similar way as: https://reactnative.dev/docs/text#numberoflines

## 3.7.3

[withColor] Add defaultColor value

## 3.7.1

[Expandable] Add open classname

## 3.6.0 **BREAKING**

[Hash] Refactor hash to work with actions: `share`, `copy`, `link`, `customAction`
[BlockchainAddress] Refactor to work with new Hash component

## 3.5.4

[useNumericInput] Fix useNumericInput

## 3.5.2

[Upload] Fix onChange not being called with same file

## 3.5.0

[TextInput] Add format prop that can be used to format the input value

## 3.4.9

[Skeleton] Remove max-width from Skeleton

## 3.3.1

[withColor] Add withColor HOC
[withSkeleton] Improve withSkeleton types

## 3.3.0 **BREAKING**

[Selector] Refactor of selector. `type` prop now is `controller`. Enable custom render function
[SelectorGroup] SelectorGroup update `type` prop now is `controller`. Enable custom render function

## 3.2.21

[TextInput] Update carete-color based on textinput validity status

## 3.2.18

[TextInput] Fix valid `TextInput` showing `ValidIcon` with `validElement` prop set to `false`.

## 3.2.15

[Select] Add Select Placeholder classname

## 3.2.10

[Chip] Omit HTMLAttributes "prefix" overriding CoreChipProps prefix

## 3.2.9

[package.json] Update react-utils

## 3.2.8

[package.json] Update react-components-core (SelectItem non blocking updates)

## 3.2.7

[package.json] Update react-components-core (update z-Index values)

## 3.2.6

[Dialog] Add buttons props

## 3.2.5

[Package.json] `react-components-core` update (Dialog buttons layout)

## 3.2.4

[Package.json] `react-components-core` update (not_equal_validator)

## 3.2.3

[Package.json] `react-components-core` update (useNumericInput)

## 3.2.2

[useColor] Moved to react-components-core

## 3.2.1

Updated react-components-core

## 3.2.0 **BREAING**

[Alert] Change message prop to content
[Toast] Change message prop to content because Toast uses Alert

## 3.1.0

[Dialog] Add Dialog component
[Button] Implement color prop

## 3.0.26

[Package.json] Update dependecies: react-components-core

## 3.0.25

[Package.json] Update dependecies: react-components-core
[Config] Add locale to the config

## 3.0.2 **BREAING**

[Popover] Change skidding for offset. Add offset in both axis

## 2.23.50

[useSetTheme] Export it from core

## 2.23.49

[Popover] showOn = "click" -> hide onClick

## 2.23.48

[Upload] Add input testid for easier testing
[Chip] Props now extend React.HTMLAttributes<HTMLDivElement>

## 2.23.47

[BlockchainLinks] Add Nfts & Tokens to BlockchainAddress

## 2.23.35

[Chip] Reforwarning on chip
[Lable] Fix singleLine

## 2.23.30

-   Update react-components-core with core selectgroup
-   Add singleLine to the Label component

[SelectGroup] Add SelectGroup component

## 2.22.7

[Carousel] Remove console log + docu
[Col] Forward the ref to the root of the col

## 2.19.0 **BREAING**

Theme is now a part of config and ConfigProvider must be provided instead of just the ThemeProvider

[config] Config refactor

## 2.18.1

[Slider] Rail width fix

## 2.18.0

-   All inputs components now use FormControl as its core and have a common behaviour
-   Extracted common theme code to react-components core
-   Extracted common input code to react-components-core

[FormControl] Add FormControl

## 2.17.13

[Divider] Divider color can now be set with the color css attribute.

[Hash] Added a base Hash component that displays hashes the same way BlockchainAddress component did

[BlockchainAddress] This component is now built on top of Hash

## 2.17.12

[Typography] Light className

## 2.17.11

[Table] Fix popover layout

## 2.17.10

[Table] Add popover option in TableCol

[Popover] Add PopoverRoot styling

## 2.17.(8|9)

[Form] Remove fields on unmount or name change from data

## 2.17.7

[Upload] Fix fileTypes

## 2.17.5

[Upload] Add fileType "directory"

## 2.17.4

Dependencies update

## 2.17.3

[Popover] Add `skidding` props

## 2.17.2

[createModal] Rename `closeModal` to `close`

## 2.17.1

[createModal] Now uses a higher order component that grants the `id` of the modal that is being created and a `closeModal` function to be able to close it from inside

## 2.17.0 **BREAING**

[Popover] `position` prop has changed on order to match Popper.js'.
[Popover] Improved Popover built on top of Popper.js

## 2.16.2

[Button] Fixed Button being disabled when inside a form and type !== "submit"

[IconButton] Fixed Button being disabled when inside a form and type !== "submit"

[IconButton] Added loading and loadingElement props

## 2.16.1

[ModalProvider] patch fixing useModal types

## 2.16.0

---

**BREAING**

Backdrops, Modals and Drawers no longer use names in order to be used with their corresponding hooks. This is now handled internally by create(Backdrop|Modal|Drawer) helper function. That is to say, to create a Backdrop based component, its corresponding creator function should be used.

---

[Backdrop] Removed name prop.

[Backdrop] Added createBackdrop function.

[Backdrop] hideBackdrop from useBackdrop hook accepts a Backdrop, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

[Modal] Removed name prop.

[Modal] Added createModal function.

[Modal] hideModal from useModal hook accepts a Modal, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

[Drawer] Removed name prop.

[Drawer] Added createDrawer function.

[Drawer] hideDrawer from useDrawer hook accepts a Drawer, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

-   hide(Backdrop|Modal|Drawer) without an argument, will close the last components of its type in a future update. For now, **the last opened Backdrop based component will be closed when used without an argument**.

## 2.15.16

[Button] Props changed from HTMLAttributes<HTMLButtonElement> to ButtonHTMLAttributes<HTMLButtonElement>

[Button] IMPORTANT: Default type is now "button" instead of "submit", in order to prevent all button to trigger forms by default.

[IconButton] Props changed from HTMLAttributes<HTMLButtonElement> to ButtonHTMLAttributes<HTMLButtonElement>

[Button] IMPORTANT: Default type is now "button" instead of "submit", in order to prevent all button to trigger forms by default.

[PaginationItem] Buttons are now of type "button" in order to prevent unwanted form triggers.

[ModalProvider] modal-root now has "position: absolute; z-index: theme.zIndex.modal + 1". Modals from modal-root appear on top of modals rendered deeper in the dom tree.
