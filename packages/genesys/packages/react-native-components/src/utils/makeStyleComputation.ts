import { Stylesheet } from "@peersyst/react-native-styled";
import { AnyObject } from "@peersyst/react-types";

export default function makeStyleComputation<P extends { style?: AnyObject }>(
    fn: (style: NonNullable<Stylesheet<P["style"]>>) => Stylesheet<P["style"]>,
    deps: Array<any>,
): [(style: NonNullable<Stylesheet<P["style"]>>) => Stylesheet<P["style"]>, Array<any>] {
    return [fn, deps];
}
