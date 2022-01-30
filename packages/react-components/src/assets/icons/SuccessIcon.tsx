import React from "react";
import { SvgIcon, SvgIconProps } from "@peersyst/react-components";
export function SuccessIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...props} data-testid="SuccessIcon">
            <path d="M12 0C13.5759 -2.34822e-08 15.1363 0.310389 16.5922 0.913445C18.0481 1.5165 19.371 2.40042 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12C24 13.5759 23.6896 15.1363 23.0866 16.5922C22.4835 18.0481 21.5996 19.371 20.4853 20.4853C19.371 21.5996 18.0481 22.4835 16.5922 23.0866C15.1363 23.6896 13.5759 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 4.74244e-08 12 0V0ZM12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2V2ZM10.5 14.084L16.24 8.328C16.416 8.15014 16.6524 8.04476 16.9023 8.03265C17.1523 8.02054 17.3977 8.10259 17.5901 8.2626C17.7825 8.42261 17.9079 8.64894 17.9416 8.89691C17.9753 9.14489 17.9148 9.39648 17.772 9.602L17.656 9.742L11.208 16.206C11.0428 16.372 10.8246 16.4747 10.5914 16.4962C10.3582 16.5178 10.1248 16.4568 9.932 16.324L9.792 16.208L6.292 12.708C6.11483 12.5316 6.01015 12.2953 5.99859 12.0456C5.98704 11.7958 6.06943 11.5508 6.22955 11.3588C6.38967 11.1668 6.61589 11.0418 6.86363 11.0083C7.11138 10.9748 7.36267 11.0354 7.568 11.178L7.708 11.292L10.5 14.084L16.24 8.328L10.5 14.084V14.084Z" />
        </SvgIcon>
    );
}
