import { CoreHashProps } from "@peersyst/react-components-core";
import { ReactNode } from "react";
import { TypographyProps } from "../Typography";

//Common types
export type HashProps = Omit<TypographyProps, "singleLine" | "children"> &
    CoreHashProps & {
        /**
         * Address' length in characters
         */
        length?: number | "auto" | "complete";
        /**
         * If address should break
         */
        break?: boolean;
        /**
         * In case action === share, this function can be passed to personalize the ShareData.
         * If action !== share, it will be ignored.
         */
        hashToShareData?: (hash: string) => ShareData;
    };

export interface HashWrapperProps {
    url: HashProps["url"];
    children: ReactNode;
    action: HashProps["action"];
    hashToShareData: HashProps["hashToShareData"];
    hash: string;
}

//Style types
export interface HashRootProps {
    autoLength: boolean;
}

export interface HashTextProps {
    break: boolean;
}
