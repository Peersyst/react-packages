import React from "react";
import { SvgIcon, SvgIconProps } from "@peersyst/react-components";
export function CrossIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...props} data-testid="CrossIcon">
            <g clipPath="url(#clip0_328_42)">
                <path d="M20.4814 3.51118C20.6571 3.68693 20.7633 3.92036 20.7802 4.16832C20.7971 4.41627 20.7237 4.66197 20.5735 4.85998L20.4814 4.96567L13.4523 11.9967L20.4853 19.0296C20.6695 19.2139 20.7768 19.4613 20.7857 19.7217C20.7945 19.9822 20.7042 20.2363 20.5329 20.4326C20.3617 20.629 20.1222 20.7531 19.863 20.7797C19.6038 20.8064 19.3441 20.7337 19.1365 20.5762L19.0308 20.4841L11.9978 13.4512L4.96973 20.4832C4.78525 20.667 4.53788 20.7741 4.27756 20.7826C4.01724 20.7912 3.76335 20.7007 3.56717 20.5294C3.37098 20.3581 3.24711 20.1187 3.22055 19.8596C3.19399 19.6005 3.26673 19.3409 3.42409 19.1334L3.51621 19.0277L10.5433 11.9967L3.51427 4.96761C3.33007 4.7833 3.22269 4.53593 3.21385 4.2755C3.205 4.01507 3.29534 3.76099 3.46661 3.5646C3.63788 3.36821 3.87732 3.24416 4.13653 3.2175C4.39574 3.19085 4.65541 3.26358 4.86307 3.421L4.96876 3.51312L11.9988 10.5432L19.0269 3.51118C19.2198 3.3183 19.4814 3.20995 19.7541 3.20995C20.0269 3.20995 20.2885 3.3183 20.4814 3.51118Z" />
            </g>
            <defs>
                <clipPath id="clip0_328_42">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
}
