import { SelectOption } from "../Select.types";

export default function (obj: any): obj is SelectOption<any> {
    return (obj as SelectOption<any>).value !== undefined;
}
