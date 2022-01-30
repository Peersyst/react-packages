export interface Clearable {
    clear(): void;
}

export default function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait = 166,
): ((...args: any[]) => any) & Clearable {
    let timeout: NodeJS.Timeout;

    function debounced(...args: any[]) {
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
