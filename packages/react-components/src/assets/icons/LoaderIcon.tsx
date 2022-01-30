import React from "react";
import { SvgIcon, SvgIconProps } from "@peersyst/react-components";
export function LoaderIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...props} data-testid="LoaderIcon">
            <path d="M24 12C24 5.3728 18.6278 0 12 0C5.3728 0 0 5.3728 0 12H2.61286C2.61286 6.81604 6.81539 2.61286 12 2.61286C17.1846 2.61286 21.3871 6.81539 21.3871 12H24Z">
                <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 12 12"
                    to="360 12 12"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </path>
        </SvgIcon>
    );
}
