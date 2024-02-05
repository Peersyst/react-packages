import { TypographyProps } from "../../display/Typography";
import { CoreHashProps } from "@peersyst/react-components-core";
import { SharePayload } from "../../hooks/useShare/useShare.types";

export type HashProps = Omit<TypographyProps, "children" | "numberOfLines"> &
    CoreHashProps & {
        /**
         * Number of lines to display
         */
        numberOfLines?: number | "auto";
        /**
         * Hash' length in characters
         */
        length?: number;
        /**
         * Hash to SharePayload mapper
         */
        hashToSharePayload?: (hash: string) => SharePayload;
    };
