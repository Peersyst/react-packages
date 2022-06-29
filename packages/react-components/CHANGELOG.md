
# Versions

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

## 2.17.0

---

#### BREAKING CHANGES
Popover `position` prop has changed on order to match Popper.js'.

---

[Popover] Improved Popover built on top of Popper.js

## 2.16.2

[Button] Fixed Button being disabled when inside a form and type !== "submit"

[IconButton] Fixed Button being disabled when inside a form and type !== "submit"

[IconButton] Added loading and loadingElement props

## 2.16.1

[ModalProvider] patch fixing useModal types

## 2.16.0

---

#### BREAKING CHANGES
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

* hide(Backdrop|Modal|Drawer) without an argument, will close the last components of its type in a future update. For now, **the last opened Backdrop based component will be closed when used without an argument**.

## 2.15.16

[Button] Props changed from HTMLAttributes<HTMLButtonElement> to ButtonHTMLAttributes<HTMLButtonElement>

[Button] IMPORTANT: Default type is now "button" instead of "submit", in order to prevent all button to trigger forms by default.

[IconButton] Props changed from HTMLAttributes<HTMLButtonElement> to ButtonHTMLAttributes<HTMLButtonElement>

[Button] IMPORTANT: Default type is now "button" instead of "submit", in order to prevent all button to trigger forms by default.

[PaginationItem] Buttons are now of type "button" in order to prevent unwanted form triggers.

[ModalProvider] modal-root now has "position: absolute; z-index: theme.zIndex.modal + 1". Modals from modal-root appear on top of modals rendered deeper in the dom tree. 

