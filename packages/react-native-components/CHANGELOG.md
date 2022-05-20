# Versions

## 0.0.2

[Backdrop] hideBackdrop from useBackdrop hook accepts a Backdrop, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

[Modal] hideModal from useModal hook accepts a Modal, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

[Drawer] hideDrawer from useDrawer hook accepts a Drawer, an id or nothing. If nothing is provided, **the last opened Backdrop based component will be closed**.

* hide(Backdrop|Modal|Drawer) without an argument, will close the last components of its type in a future update. For now, **the last opened Backdrop based component will be closed when used without an argument**.
