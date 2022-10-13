import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
import { isColor } from "@peersyst/react-utils";

export class ColorValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_color"));
    }

    validate(value: string): boolean {
        return isColor(value);
    }
}
