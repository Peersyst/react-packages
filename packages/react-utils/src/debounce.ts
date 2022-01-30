export interface Cancelable {
    clear(): void;
}

export default function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait = 166,
): Cancelable {
    let timeout: NodeJS.Timeout;

    function debounced(...args: unknown[]) {
        const later = () => {
            // eslint-disable-next-line prefer-spread
            func.apply(null, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }

    debounced.clear = () => {
        clearTimeout(timeout);
    };

    return debounced;
}
