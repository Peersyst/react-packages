export default function getColorScheme(): "light" | "dark" {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else {
        return "light";
    }
}
