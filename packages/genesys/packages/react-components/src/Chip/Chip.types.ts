import { CoreChipProps } from "@peersyst/react-components-core";
import { MouseEvent, ReactElement } from "react";
import * as React from "react";

export type ChipProps = CoreChipProps &
    React.HTMLAttributes<HTMLDivElement> & {
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
