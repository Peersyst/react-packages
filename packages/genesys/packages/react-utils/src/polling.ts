export type Polling<R> = Promise<R> & { abort(): void };

export interface PollingOptions {
    delay?: number;
    maxIterations?: number;
}

export default function <R>(
    fn: () => Promise<R>,
    condition: (res: R) => boolean,
    options: PollingOptions = {},
): Polling<R> {
    let timeout: NodeJS.Timeout;
    let abort = false;

    const polling = async (): Promise<R> => {
        const { delay = 1000, maxIterations } = options;

        let i = 0;
        let res = await fn();
        while (!abort && condition(res)) {
            if (i === maxIterations)
                throw new Error("Polling executed the maximum number iterations");
            await new Promise<void>((resolve) => {
                timeout = setTimeout(async () => {
                    i++;
                    res = await fn();
                    resolve();
                }, delay);
            });
        }
        return res;
    };

    const result = polling() as Polling<R>;

    result.abort = () => {
        abort = true;
        clearTimeout(timeout);
    };

    return result;
}
