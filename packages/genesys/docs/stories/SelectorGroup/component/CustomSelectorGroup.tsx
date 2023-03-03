import { Row, SelectorControllerProps, SelectorGroup } from "@peersyst/react-components";
import { useControlled } from "@peersyst/react-hooks";

export const SOCIAL_ICONS: Record<string, string> = {
    google: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
    facebook: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",
    twitter: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",
};

export function CustomSelector({ value = false, onChange, label }: SelectorControllerProps) {
    const [selected, setSelected] = useControlled(value, value, onChange);

    const handleChange = () => {
        setSelected(!selected);
    };

    const finalLabel = label as string;

    return (
        <Row style={{ cursor: "pointer" }} onClick={handleChange} gap="1rem" alignItems="center">
            <img src={SOCIAL_ICONS[finalLabel.toLocaleLowerCase()]} alt={finalLabel} width="15px" />
            <label style={{ color: value ? "green" : "white", cursor: "pointer" }}>{label}</label>
        </Row>
    );
}

export default function CustomSelectorGroup(): JSX.Element {
    return (
        <SelectorGroup
            label="Loogin with your favorite app"
            controller={CustomSelector}
            options={[
                { value: "google", label: "Google" },
                { value: "facebook", label: "Facebook" },
                { value: "twitter", label: "Twitter" },
            ]}
        />
    );
}
