import { currentColor, CurrentColorAccessor } from "../accessors";
import isAccessor from "./isAccessor";

export default function isCurrentColor<R = string>(value: any): value is CurrentColorAccessor<R> {
    return isAccessor(value) && value.name === currentColor.name;
}
