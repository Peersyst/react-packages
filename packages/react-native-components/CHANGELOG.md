# Versions

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

* hide(Backdrop|Modal|Drawer) without an argument, will close the last components of its type in a future update. For now, **the last opened Backdrop based component will be closed when used without an argument**.
