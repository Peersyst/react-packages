import { LabelProps } from "./Label.types";
import { Property } from "csstype";
import { LabelChildren, LabelColRoot, LabelRowRoot, LabelText } from "./Label.styles";
import { cx } from "@peersyst/react-utils";
import { useMediaQuery } from "@peersyst/react-hooks";
import { useTheme } from "../Theme";

const Label = ({
    label,
    placement: placementProp = "top",
    alignment: alignmentProp = "start",
    gap: gapProp = 10,
    children,
    className,
    style,
    breakpoint,
    variant,
}: LabelProps): JSX.Element => {
    const { theme } = useTheme();
    const breakpointIsActive = useMediaQuery(
        breakpoint ? theme.breakpoints.down(breakpoint.width).replace("@media ", "") : "",
    );

    const [placement, alignment, gap] = breakpointIsActive
        ? [
              breakpoint?.placement || placementProp,
              breakpoint?.alignment || alignmentProp,
              breakpoint?.gap || gapProp,
          ]
        : [placementProp, alignmentProp, gapProp];

    const direction: Property.FlexDirection = (() => {
        if (placement === "top") return "column";
        else if (placement === "bottom") return "column-reverse";
        else if (placement === "left") return "row";
        else return "row-reverse";
    })();

    const RootComponent = direction.includes("row") ? LabelRowRoot : LabelColRoot;
    const content = [
        <LabelText key="label" alignment={alignment} className="Label" variant={variant}>
            {label}
        </LabelText>,
        <LabelChildren key="children" className="LabelChildren">
            {children}
        </LabelChildren>,
    ];

    return (
        <RootComponent
            gap={gap}
            alignment={alignment}
            className={cx("LabelRoot", className)}
            style={style}
        >
            {direction.includes("reverse") ? content.reverse() : content}
        </RootComponent>
    );
};

export default Label;
