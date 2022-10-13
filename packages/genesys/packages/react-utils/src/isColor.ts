export default function (color: string): boolean {
    const style = new Option().style;
    style.color = color;
    return (
        style.color !== "" &&
        style.color !== "unset" &&
        style.color !== "initial" &&
        style.color !== "inherit"
    );
}
