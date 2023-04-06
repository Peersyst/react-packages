import { AnyObject } from "@peersyst/react-types";
import { Stylesheet } from "../types";

export default function createStylesheets(
    ...stylesheets: Stylesheet<AnyObject>[]
): Record<string, Stylesheet<AnyObject>> {
    return stylesheets.reduce((record, stylesheet) => {
        const { _metadata } = stylesheet;
        record[_metadata.component] = stylesheet;
        return record;
    }, {} as Record<string, Stylesheet<AnyObject>>);
}
