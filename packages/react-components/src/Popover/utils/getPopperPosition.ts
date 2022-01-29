import { PopperPosition } from "../Popover.types";
import { css } from "styled-components";

export function getPopperPosition(position: PopperPosition): ReturnType<typeof css> {
    switch (position) {
        case "bottom-left":
            return css({ right: "100%", top: "100%" });
        case "bottom":
            return css({ left: "50%", transform: "translateX(-50%)", top: "100%" });
        case "bottom-right":
            return css({ left: "100%", top: "100%" });
        case "top-left":
            return css({ right: "100%", bottom: "100%" });
        case "top":
            return css({
                left: "50%",
                transform: "translateX(-50%)",
                bottom: "100%",
            });
        case "top-right":
            return css({ left: "100%", bottom: "100%" });
        case "left":
            return css({ top: "50%", transform: "translateY(-50%)", right: "100%" });
        case "right":
            return css({ top: "50%", transform: "translateY(-50%)", left: "100%" });
    }
}
