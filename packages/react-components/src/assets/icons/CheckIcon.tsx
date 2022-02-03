import { SvgIcon, SvgIconProps } from "@peersyst/react-components";
export default function CheckIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...props} data-testid="CheckIcon">
            <path d="M7.83738 16.8082L2.35438 11.3252L0 13.6796L7.83738 21.517L24 5.35438L21.6456 3L7.83738 16.8082Z" />
        </SvgIcon>
    );
}
