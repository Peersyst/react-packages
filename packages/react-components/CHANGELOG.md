# Versions

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

