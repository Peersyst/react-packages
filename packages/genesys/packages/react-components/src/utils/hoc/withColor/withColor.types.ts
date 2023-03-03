import { ThemeColor } from "@peersyst/react-components-core";

export interface WithColorProps {
    color?: string;
}

export type WithColor<TProps> =
    | TProps & {
          /*
           * Color prop
           */
          color?: ThemeColor;
      };
