import { SvgIcon, SvgIconProps } from "@peersyst/react-components";
export default function StartIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...props} data-testid="StartIcon">
            <path d="M4.33342 0C4.00682 4.30834e-05 3.69159 0.119949 3.44753 0.336975C3.20347 0.554 3.04755 0.853051 3.00933 1.17741L3 1.33342V22.6681C3.00038 23.0079 3.13051 23.3348 3.36382 23.5819C3.59713 23.8291 3.91599 23.9778 4.25527 23.9977C4.59455 24.0176 4.92862 23.9072 5.18924 23.6891C5.44986 23.471 5.61736 23.1616 5.6575 22.8241L5.66683 22.6681V1.33342C5.66683 0.979772 5.52635 0.640612 5.27628 0.390548C5.02622 0.140484 4.68706 0 4.33342 0V0ZM21.2771 0.390691C21.0475 0.161108 20.742 0.023191 20.418 0.00281478C20.0939 -0.0175614 19.7736 0.0810033 19.517 0.280017L19.3917 0.390691L8.72435 11.058C8.49477 11.2876 8.35685 11.5931 8.33648 11.9172C8.3161 12.2412 8.41467 12.5616 8.61368 12.8181L8.72435 12.9435L19.3917 23.6108C19.6316 23.8499 19.9536 23.9888 20.2922 23.9991C20.6309 24.0095 20.9607 23.8905 21.2148 23.6665C21.4689 23.4424 21.6282 23.13 21.6603 22.7928C21.6925 22.4555 21.595 22.1187 21.3878 21.8507L21.2771 21.7253L11.5525 12.0007L21.2771 2.27614C21.5271 2.02609 21.6675 1.68699 21.6675 1.33342C21.6675 0.979841 21.5271 0.640743 21.2771 0.390691V0.390691Z" />
        </SvgIcon>
    );
}
