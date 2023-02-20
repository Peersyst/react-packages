import { CoreChipProps } from "@peersyst/react-components-core";
import { MouseEvent, ReactElement } from "react";
import { HTMLAttributes } from "react";

export type ChipProps = Omit<HTMLAttributes<HTMLDivElement>, "prefix"> &
    CoreChipProps & {
        /**
         * Whether Chip appears as clickable, does not affect onClick
         */
        clickable?: boolean;
        /**
         * onDelete handler, renders a delete icon
         */
        onDelete?: (e: MouseEvent) => any;
        /**
         * Custom delete icon
         */
        deleteIcon?: ReactElement;
    };
