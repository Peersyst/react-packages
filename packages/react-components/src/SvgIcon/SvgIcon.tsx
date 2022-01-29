import { Ref } from "react";
import { ExtendedSvg } from "./SvgIcon.styles";
import { SvgIconProps } from "./SvgIcon.types";

export function SvgIcon({ className, style, children, ref, ...rest }: SvgIconProps) {
    return (
        <ExtendedSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className={className}
            style={style}
            ref={ref as Ref<SVGSVGElement>}
            role="img"
            {...rest}
        >
            {children}
        </ExtendedSvg>
    );
}
