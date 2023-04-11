import { AnyObject } from "@peersyst/react-types";
import { Stylesheet } from "../types";

/**
 * Creates the stylesheets object to be passed to the StylesheetProvider
 * @param stylesheets A set of stylesheets
 * @returns The stylesheets object to be passed to the StylesheetProvider
 */
export default function createStylesheets(
    ...stylesheets: Stylesheet<AnyObject>[]
): Record<string, Stylesheet<AnyObject>> {
    return stylesheets.reduce((record, stylesheet) => {
        const { _metadata } = stylesheet;
        record[_metadata.component] = stylesheet;
        return record;
    }, {} as Record<string, Stylesheet<AnyObject>>);
}
