# Versions

## 2.15.16

[Button] Props changed from HTMLAttributes<HTMLButtonElement> to ButtonHTMLAttributes<HTMLButtonElement>
[Button] IMPORTANT: Default type is now "button" instead of "submit", in order to prevent all button to trigger forms by default.
[IconButton] Props changed from HTMLAttributes<HTMLButtonElement> to ButtonHTMLAttributes<HTMLButtonElement>
[Button] IMPORTANT: Default type is now "button" instead of "submit", in order to prevent all button to trigger forms by default.
[PaginationItem] Buttons are now of type "button" in order to prevent unwanted form triggers.
[ModalProvider] modal-root now has "position: absolute; z-index: theme.zIndex.modal + 1". Modals from modal-root appear on top of modals rendered deeper in the dom tree. 
