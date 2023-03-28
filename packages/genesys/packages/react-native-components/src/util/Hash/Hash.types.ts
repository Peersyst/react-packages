import { TypographyProps } from "../../display/Typography";
import { CoreHashProps } from "@peersyst/react-components-core";

export type HashProps = Omit<TypographyProps, "numberOfLines" | "children"> &
    CoreHashProps & {
        /**
         * Hash' length in characters
         */
        length?: number;
    };
