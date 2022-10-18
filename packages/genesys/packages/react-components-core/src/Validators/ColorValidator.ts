import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
import {
    isColor,
    isHexColor,
    isHslColor,
    isHwbColor,
    isLabColor,
    isNameColor,
    isRgbColor,
    isSpecialNameColor,
} from "@peersyst/react-utils";

export type ValidatorColor = "hex" | "hsl" | "name" | "rgb" | "special-name" | "hwb" | "lab";

export type ColorValidatorType = true | ValidatorColor | ValidatorColor[];

const colorValidators: Record<ValidatorColor, (value: string) => boolean> = {
    hex: isHexColor,
    hsl: isHslColor,
    name: isNameColor,
    rgb: isRgbColor,
    "special-name": isSpecialNameColor,
    hwb: isHwbColor,
    lab: isLabColor,
};

export class ColorValidator extends BaseValidator {
    colorValidators: ((value: string) => boolean)[];

    constructor(type: ColorValidatorType, message: string | undefined, translate: TranslateFn) {
        super(message || translate("invalid_color"));
        if (type === true) this.colorValidators = [isColor];
        else if (Array.isArray(type)) this.colorValidators = type.map((t) => colorValidators[t]);
        else this.colorValidators = [colorValidators[type]];
    }

    validate(value: string): boolean {
        if (value === "") return true;
        return this.colorValidators.some((v) => v(value));
    }
}
