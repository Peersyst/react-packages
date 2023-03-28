import { HashProps } from "../Hash.types";

export interface UseHashOnPressHandlerParams {
    hash: string;
    url: string;
    action: HashProps["action"];
}

export default function useHashOnPressHandler({ hash, url, action }: UseHashOnPressHandlerParams) {
    function handleOnPress(params) {
        switch (action) {
        }
    }
    return handleOnPress;
}
