import { LabelProps } from "./Label.types";
import { Property } from "csstype";
import { LabelChildren, LabelColRoot, LabelRowRoot, LabelText } from "./Label.styles";
import { capitalize, cx } from "@peersyst/react-utils";
import { useMediaQuery } from "@peersyst/react-hooks";
import { useTheme } from "../theme";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Fragment, isValidElement } from "react";

const Label = (props: LabelProps): JSX.Element => {
    const {
        label,
        placement: placementProp = "top",
        alignment: alignmentProp = "start",
        gap: gapProp = 10,
        children,
        singleLine = false,
        className,
        style,
        breakpoint,
        variant,
    } = useMergeDefaultProps("Label", props);

    const theme = useTheme();
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
        isValidElement(label) ? (
            <Fragment key="label">{label}</Fragment>
        ) : (
            <LabelText
                key="label"
                placement={placement}
                alignment={alignment}
                className={cx(
                    "Label",
                    capitalize(placement) + "Placement",
                    singleLine && "SingleLine",
                )}
                variant={variant}
            >
                {label}
            </LabelText>
        ),
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
